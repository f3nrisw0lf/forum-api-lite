import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: String,
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
