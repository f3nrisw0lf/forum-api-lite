import express, { json } from 'express';
import dotenv from 'dotenv';
import postRoute from './src/routes/posts.routes.js';

dotenv.config();
const { PORT = 8080 } = process.env;

const app = express();
import DB_CONNECTION from './src/configs/db.config.js';

app.use(json());

app.get('/', (req, res) => {
  res.json({ asdasdasd: 'ASDASD' });
});

app.use('/posts/', postRoute);

app.listen(PORT, () => {
  console.log(`Running in Port: http://localhost:${PORT}`);
});
