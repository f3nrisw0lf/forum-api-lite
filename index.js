import express, { json } from 'express';
import dotenv from 'dotenv';
dotenv.config();

import postsRoute from './src/routes/posts.route.js';
import commentsRoute from './src/routes/comments.route.js';
import reportsRoute from './src/routes/reports.routes.js';

const app = express();
const { PORT = 8080 } = process.env;
import DB_CONNECTION from './src/configs/db.config.js';

app.use(json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to The Forum API Lite' });
});

app.use('/posts/', postsRoute);
app.use('/comments/', commentsRoute);
app.use('/reports/', reportsRoute);

app.listen(PORT, () => {
  console.log(`Running in Port: http://localhost:${PORT}`);
});
