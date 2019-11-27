import gql from "graphql-tag";

const GET_BOOKS = gql`
  {
    books {
      name
      _id
    }
  }
`;

const GET_AUTHORS = gql`
  {
    authors {
      name  
      _id
    }
  }
`;

const ADD_BOOK = gql`
  mutation AddBook($name: String!, $gerne: String!, $authorId: ID!) {
    addBook(name: $name, gerne: $gerne, authorId: $authorId) {
      name
      _id
    }
  }
`;

const BOOKS_SUBSCRIPTION = gql`
  subscription onBookAdded($name: String!) {
    bookAdded(name: $name) {
      _id
      name
    }
  }
`;
export {GET_BOOKS, GET_AUTHORS, ADD_BOOK, BOOKS_SUBSCRIPTION} 