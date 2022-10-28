import mongoose from 'mongoose';

const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    user: { type: Schema.ObjectId, ref: 'User' },
    text: String,
    post: { type: Schema.ObjectId, ref: 'Post' },
    isHate: Boolean,
  },
  { timestamps: true }
);

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
