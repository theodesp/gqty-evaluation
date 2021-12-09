import type { AppProps } from 'next/app'

import 'normalize.css/normalize.css';
import React from 'react';
import '../styles/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
    )

}

export default MyApp
