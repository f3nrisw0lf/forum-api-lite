import Report from '../models/report.model.js';
import User from '../models/user.model.js';
import { checkUserExists } from '../utils/helper.util.js';

async function createReport(req, res) {
  const { username, post } = req.body;

  const userQuery = await User.findOne({ username: username });
  const user = await checkUserExists(userQuery, username);

  const createReportQuery = new Report({
    user: user._id,
    post: post,
  }).save();

  return res.json(JSON.stringify(createReportQuery));
}

export { createReport };
