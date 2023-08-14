import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { getCookie } from 'cookies-next';

const token = getCookie('token')
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL

const client = new ApolloClient({
  uri: SERVER_URL,
  cache: new InMemoryCache(),
  headers: {
    ...(token !== undefined ? { Authorization: `Bearer ${token}` } : {})
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Pentria Admin</title>
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}
