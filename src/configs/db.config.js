import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const { connect, connection } = mongoose;
const { MONGO_URI = 'mongodb://127.0.0.1:27017/forum' } = process.env;

connect(MONGO_URI, {
  useUnifiedTopology: true,
});

const DB_CONNECTION = connection.getClient();

DB_CONNECTION.on('error', console.error.bind(console, 'connection error:'));
DB_CONNECTION.once('open', () => {
  console.log('CONNECTED!');
});

export default DB_CONNECTION;
