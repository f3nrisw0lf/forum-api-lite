import User from '../models/user.model.js';

async function checkUserExists(userQuery, username) {
  if (!userQuery) {
    const userCreateQuery = new User({ username });
    userCreateQuery.save();

    return userCreateQuery;
  }

  return userQuery;
}

export { checkUserExists };
