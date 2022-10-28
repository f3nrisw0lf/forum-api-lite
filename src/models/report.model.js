import mongoose from 'mongoose';

const { Schema } = mongoose;

const reportSchema = new Schema(
  {
    user: { type: Schema.ObjectId, ref: 'User', required: true },
    post: { type: Schema.ObjectId, ref: 'Post', required: true },
  },
  { timestamps: true }
);

const Report = mongoose.model('Report', reportSchema);

export default Report;
