import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: { type: String, unique: true, dropDups: true },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
