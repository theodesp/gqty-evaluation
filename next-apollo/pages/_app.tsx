import type { AppProps } from 'next/app'

import 'normalize.css/normalize.css';
import React from 'react';
import '../styles/main.scss';
import {ApolloProvider} from "@apollo/client";
import client from "./client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
    )

}

export default MyApp
