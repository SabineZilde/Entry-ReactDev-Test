import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { MainProvider } from "./Context/MainContext";


export const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <MainProvider>
        <App />
      </MainProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);