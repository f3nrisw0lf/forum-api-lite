import Report from '../models/report.model.js';
import User from '../models/user.model.js';
import { checkUserExists } from '../utils/helper.util.js';

async function createReport(req, res) {
  const { username, post, isHate, comment } = req.body;

  const userQuery = await User.findOne({ username: username });
  const user = await checkUserExists(userQuery, username);

  if (!Boolean(post) && !Boolean(comment)) {
    return res.status(400).json({
      message: 'Either Post or Comment ID must be in the Request Body',
    });
  }

  const createReportQuery = new Report({
    user: user._id,
    post,
    comment,
    isHate,
  }).save();

  return res.json(JSON.stringify(createReportQuery));
}

export { createReport };
