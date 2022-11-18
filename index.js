import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import postsRoute from './src/routes/posts.route.js';
import commentsRoute from './src/routes/comments.route.js';
import reportsRoute from './src/routes/reports.route.js';
import userRoute from './src/routes/user.route.js';

const app = express();
const { PORT = 8080 } = process.env;
import DB_CONNECTION from './src/configs/db.config.js';

app.use(json());
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to The Forum API Lite' });
});

app.use('/posts/', postsRoute);
app.use('/comments/', commentsRoute);
app.use('/reports/', reportsRoute);
app.use('/user/', userRoute);

app.listen(PORT, () => {
  console.log(`Running in Port: http://localhost:${PORT}`);
});
