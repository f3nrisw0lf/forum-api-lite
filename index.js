import express, { json } from 'express';
import dotenv from 'dotenv';

import postRoute from './src/routes/posts.routes.js';
import commentRoute from './src/routes/comments.routes.js';

dotenv.config();
const { PORT = 8080 } = process.env;

const app = express();
import DB_CONNECTION from './src/configs/db.config.js';

app.use(json());

app.get('/', (req, res) => {
  res.json({ asdasdasd: 'ASDASD' });
});

app.use('/posts/', postRoute);
app.use('/comments/', commentRoute);

app.listen(PORT, () => {
  console.log(`Running in Port: http://localhost:${PORT}`);
});
