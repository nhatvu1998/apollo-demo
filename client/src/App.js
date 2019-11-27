import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import BookList from './components/BookList'
import AddBook from "./components/AddBook";

import DetailContext from "./detail-context"


const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});
  
const App = () => {
  return (
    <ApolloProvider client={client}>
      <DetailContext.Provider value={{bookId:"1"}}>
        <BookList />
        
        <AddBook />
      </DetailContext.Provider>
    </ApolloProvider>
  );
};

export default App;
