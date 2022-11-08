import User from '../models/user.model.js';

async function checkUserExists(userQuery, username) {
  if (!userQuery) {
    const userCreateQuery = new User({ username });
    userCreateQuery.save();

    return userCreateQuery;
  }

  return userQuery;
}

async function checkUsernameInRequest(req, res, next) {
  const body = req.body;

  if (!body.username) {
    return res.status(400).json({
      message: 'Username is required in every Post Request',
    });
  }

  return next();
}

export { checkUserExists, checkUsernameInRequest };
