/** @format */
const Comment = require("../models/CommentModel");

const resolvers = {
  Query: {
    async getComments(parent, { count }) {
      return await Comment.find().sort({ commentedOn: -1 }).limit(count);
    },
    async commentsOf(parent, { ID }) {
      return await Comment.findById(ID);
    },
  },
  Mutation: {
    async postComment(parent, { postCommentInput: { name, email, comment } }) {
      const newComment = new Comment({
        name: name,
        email: email,
        comment: comment,
        commentedOn: new Date().toISOString(),
        likes: 0,
        dislikes: 0,
      });
      const res = await newComment.save();
      //   await Comment.create(newComment)
      //     .then((data) => {
      //       return {
      //         id: data.id,
      //         ...data._doc,
      //       };
      //     })
      //     .catch((err) => console.log("Not Posted"));
      return {
        id: res.id,
        ...res._doc,
      };
    },
  },
};

module.exports = { resolvers };
