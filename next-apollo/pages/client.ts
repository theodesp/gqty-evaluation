// import { ApolloClient, InMemoryCache } from "@apollo/client";

// const client = new ApolloClient({
//   uri: "http://localhost:10003/graphql",
//   cache: new InMemoryCache(),
//   connectToDevTools: true
// });

import { createClient, defaultExchanges } from 'urql';
import { devtoolsExchange } from '@urql/devtools';
import { cacheExchange } from '@urql/exchange-graphcache';
import schema from '../schema.json';

const csEx = cacheExchange({ schema });

const client = createClient({
  url: 'http://localhost:10003/graphql',
  exchanges: [devtoolsExchange, csEx, ...defaultExchanges],
})

export default client;
