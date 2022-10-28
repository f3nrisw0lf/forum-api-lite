import axios from 'axios';

import Post from '../models/post.model.js';
import User from '../models/user.model.js';

const { HATE_SPEECH_API = 'http://localhost:5000' } = process.env;

async function createPost(req, res) {
  console.log(req.body);
  const { username, text } = req.body;

  const user = await User.findOne({ username: username });

  if (!user) {
    const query = new User({ username });
    query.save();
  }

  const isHateRequest = await axios.post(
    `${HATE_SPEECH_API}/single-hate-prediction`,
    {
      text,
    }
  );

  const { is_hate_speech } = await isHateRequest.data;

  const savePostQuery = new Post({
    user: user._id,
    content: text,
    isHate: await is_hate_speech,
  }).save();

  res.json(JSON.stringify(await savePostQuery));
}

async function deletePost(req, res) {}

export { createPost };
