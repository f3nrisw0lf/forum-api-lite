import Post from '../models/post.model.js';
import User from '../models/user.model.js';

async function createPost(req, res) {
  console.log(req.body);
  const { username, text } = req.body;

  const user = await User.findOne({ username: username });

  if (!user) {
    const query = new User({ username });
    query.save();
  }

  console.log(user);
  res.json(JSON.stringify(user));
}

export { createPost };
