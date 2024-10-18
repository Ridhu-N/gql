/** @format */

import { gql } from "@apollo/client";

export const CREATE_COMMENT_MUTATION = gql`
  mutation postComment($postCommentInput: postCommentInput!) {
    postComment(postCommentInput: $postCommentInput) {
      name
      email
      comment
    }
  }
`;
