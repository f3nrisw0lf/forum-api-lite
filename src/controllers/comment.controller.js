import axios from 'axios';

import Comment from '../models/comment.model.js';
import User from '../models/user.model.js';

const { HATE_SPEECH_API = 'http://localhost:5000' } = process.env;

async function createComment(req, res) {
  const { postId, text, username } = req.body;

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

  const createCommentQuery = new Comment({
    user: user._id,
    text: text,
    post: postId,
    isHate: await is_hate_speech,
  }).save();

  return res.json(JSON.stringify(await createCommentQuery));
}

export { createComment };
