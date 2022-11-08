import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

import Backlog from '../models/backlog.model.js';
import Comment from '../models/comment.model.js';
import Post from '../models/post.model.js';
import User from '../models/user.model.js';

import { checkUserExists } from '../utils/helper.util.js';

const { HATE_SPEECH_API = 'http://localhost:5000' } = process.env;

async function createComment(req, res) {
  const { post, text, username } = req.body;
  const userQuery = await User.findOne({ username: username });
  const user = await checkUserExists(userQuery, username);

  const isHateRequest = await axios
    .post(`${HATE_SPEECH_API}/single-hate-prediction`, {
      text,
    })
    .catch((error) => error);

  const data = await isHateRequest?.data;

  if (text.length === 0) {
    return res.status(400).json({
      message: 'Text is Required',
    });
  }

  console.log(await data);
  const createCommentQuery = new Comment({
    user: user._id,
    text: text,
    post: post,
    isHate: (await data?.is_hate_speech) || 0,
  });

  if (data?.is_hate_speech) {
    new Backlog({
      comment: createCommentQuery._id,
    }).save();
  }
  createCommentQuery.save();

  // Add the new Comment's _id to the Posts Comment Array
  await Post.findByIdAndUpdate(post, {
    $push: {
      comments: createCommentQuery._id,
    },
  });

  return res.json(JSON.stringify(createCommentQuery));
}

export { createComment };
