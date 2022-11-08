import axios from 'axios';

import Post from '../models/post.model.js';
import User from '../models/user.model.js';

import { checkUserExists } from '../utils/helper.util.js';

const { HATE_SPEECH_API = 'http://localhost:5000' } = process.env;

async function createPost(req, res) {
  const { username, text } = req.body;

  const userQuery = await User.findOne({ username: username });
  const user = await checkUserExists(userQuery, username);

  const isHateRequest = await axios.post(
    `${HATE_SPEECH_API}/single-hate-prediction`,
    {
      text,
    }
  );
  const { is_hate_speech } = await isHateRequest.data;

  if (text.length === 0) {
    return res.status(400).json({
      message: 'Text is Required',
    });
  }

  const savePostQuery = new Post({
    user: user._id,
    content: text,
    isHate: await is_hate_speech,
  }).save();

  res.json(await savePostQuery);
}

async function getPosts(req, res) {
  const getPostsQuery = await Post.find()
    .sort([['createdAt', 'desc']])
    .populate('user')
    .populate({
      path: 'comments',
      populate: [{ path: 'user', model: 'User' }],
    });
  return res.json(getPostsQuery);
}

async function getPost(req, res) {
  const { id } = req.params;
  const getPostQuery = await Post.find({ _id: id })
    .sort([['createdAt', 'desc']])
    .populate('user')
    .populate({
      path: 'comments',
      populate: [{ path: 'user', model: 'User' }],
    });

  return res.json(getPostQuery);
}

async function deletePost(req, res) {}

export { createPost, getPosts, getPost };
