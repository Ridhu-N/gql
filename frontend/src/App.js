/** @format */
import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import "./App.css";
import CreateComment from "./Components/CreateComment";
import ViewComments from "./Components/ViewComments";

const errorLink = onError(({ graphqlErrors, networkErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      console.log(`graphQL Error ${message}`);
      return "";
    });
  }
});
const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:5000/graphql" }),
]);
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});
function App() {
  return (
    <ApolloProvider client={client}>
      <CreateComment />
      <ViewComments />
    </ApolloProvider>
  );
}

export default App;
