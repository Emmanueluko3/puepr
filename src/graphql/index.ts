import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri:
      process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ||
      "http://localhost:9001/graphql",
  }),
  cache: new InMemoryCache(),
});

export default apolloClient;
