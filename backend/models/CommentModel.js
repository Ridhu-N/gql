/** @format */

const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  name: String,
  email: String,
  comment: String,
  commentedOn: String,
  likes: Number,
  dislikes: Number,
});

module.exports = mongoose.model("Comment", commentSchema);
