/** @format */
const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type Comment {
    name: String!
    email: String!
    comment: String!
    commentedOn: String
    likes: Int
    dislikes: Int
  }
  input postCommentInput {
    name: String!
    email: String!
    comment: String!
  }

  type Query {
    getComments(count: Int): [Comment]
    commentsOf(ID: ID!): Comment!
  }
  type Mutation {
    postComment(postCommentInput: postCommentInput!): Comment!
  }
`;

module.exports = { typeDefs };
