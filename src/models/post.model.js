import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    user: { type: Schema.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    comments: [{ type: Schema.ObjectId, ref: 'Comment' }],
    isHate: Boolean,
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

export default Post;
