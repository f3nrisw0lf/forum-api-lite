import mongoose from 'mongoose';

const { Schema } = mongoose;

const backlogSchema = new Schema(
  {
    post: { type: Schema.ObjectId, ref: 'Post' },
    comment: { type: Schema.ObjectId, ref: 'Comment' },
  },
  { timestamps: true }
);

const Backlog = mongoose.model('Backlog', backlogSchema);

export default Backlog;
