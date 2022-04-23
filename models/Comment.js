const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const CommentSchema = new Schema(
  {
    writtenBy: {
      type: String
    },
    commentBody: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // get: (createdAtVal) => dateFormat(createdAtVal) //may need later
    }
  },
  // {
  //   toJSON: {
  //     getters: true
  //   },
  //   id: false
  // } //may need later
);

const Comment = model('Comment', CommentSchema);

module.exports = Comment;