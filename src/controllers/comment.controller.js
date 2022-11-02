import axios from 'axios';

import Comment from '../models/comment.model.js';
import Post from '../models/post.model.js';
import User from '../models/user.model.js';

import { checkUserExists } from '../utils/helper.util.js';

const { HATE_SPEECH_API = 'http://localhost:5000' } = process.env;

async function createComment(req, res) {
  const { post, text, username } = req.body;
  const userQuery = await User.findOne({ username: username });
  const user = await checkUserExists(userQuery, username);

  console.log(req.body);
  const isHateRequest = await axios.post(
    `${HATE_SPEECH_API}/single-hate-prediction`,
    {
      text,
    }
  );

  const { is_hate_speech } = await isHateRequest.data;

  const createCommentQuery = new Comment({
    user: user._id,
    text: text,
    post: post,
    isHate: await is_hate_speech,
  });
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
