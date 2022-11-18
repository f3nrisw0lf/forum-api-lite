import User from '../models/user.model.js';

async function checkUsernameExists(req, res) {
  const { username } = req.body;
  const doesUsernameExist = !Boolean((await User.find({ username })).length);

  return res.json({ isUnique: doesUsernameExist });
}

export { checkUsernameExists };
