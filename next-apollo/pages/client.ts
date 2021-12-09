// import { ApolloClient, InMemoryCache } from "@apollo/client";

// const client = new ApolloClient({
//   uri: "http://localhost:10003/graphql",
//   cache: new InMemoryCache(),
//   connectToDevTools: true
// });

import { createClient } from 'urql'

const client = createClient({
  url: 'http://localhost:10003/graphql',
})

export default client;
