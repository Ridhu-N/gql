/** @format */

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useMutation } from "@apollo/client";
import { CREATE_COMMENT_MUTATION } from "../GraphQL/Mutations";
const CreateComment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const [postComment, { error }] = useMutation(CREATE_COMMENT_MUTATION);

  const addComment = (e) => {
    e.preventDefault();
    postComment({
      variables: {
        postCommentInput: {
          name: name,
          email: email,
          comment: comment,
        },
      },
    });
  };
  if (error) {
    console.log(error);
  }
  return (
    <div>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>{" "}
            <Form.Control
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <br></br>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email </Form.Label>{" "}
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <br></br>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Comments</Form.Label>{" "}
            <Form.Control
              as="textarea"
              rows={3}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </Form.Group>{" "}
          <br></br>
          <div className="text-end">
            <Button
              variant="success"
              type="submit"
              onClick={(e) => addComment(e)}
            >
              Post Comment
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default CreateComment;
