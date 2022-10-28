import Report from '../models/report.model';

async function createReport(req, res) {
  const { userId, postId } = req.body;

  const createReportQuery = new Report({
    user: userId,
    post: postId,
  }).save();

  return res.json(JSON.stringify(createReportQuery));
}

export { createReport };
