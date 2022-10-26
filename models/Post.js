const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    user: { type: Schema.ObjectId, ref: 'User' },
    forumId: String,
    content: String,
    comments: [{ type: Schema.ObjectId, ref: 'Comment' }],
    isHate: Boolean,
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
