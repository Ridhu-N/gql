/** @format */

const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
require("dotenv").config();
PORT = process.env.PORT | 5002;

const { typeDefs } = require("./schemas/TypeDefs");
const { resolvers } = require("./schemas/Resolvers");

const app = express();
app.use(express.json());
app.use(cors());

//Apollo Server Creation
const server = new ApolloServer({ typeDefs, resolvers });

//Starting the Apollo Server
const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
};
startServer();

// Creating MongoDB Connection
mongoose
  .connect(process.env.MONGO_LOCAL_URI)
  .then(() => console.log("MongoDB Connected at Localhost"))
  .catch((err) => console.log("DB Connection Error:" + err));

// Server listening at a port

app.listen(PORT, () =>
  console.log("Listening server at http://127.0.0.1:5002/graphql")
);
