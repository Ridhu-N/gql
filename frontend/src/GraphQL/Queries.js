/** @format */

import { gql } from "@apollo/client";

export const LOAD_COMMENTS = gql`
  query {
    getComments {
      name
      email
      comment
      commentedOn
      likes
      dislikes
    }
  }
`;
