import mongoose from 'mongoose';

const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    createdBy: String,
    dateCreated: Date,
    post: { type: Schema.ObjectId, ref: 'Post' },
  },
  { timestamps: true }
);

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
