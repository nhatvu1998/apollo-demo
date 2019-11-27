const { gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    _id: ID!
    name: String
    gerne: String
    author: Author
  }

  type Author {
    _id: ID!
    name: String
    age: Int
    books: [Book]
  }

  type Query {
    book(id: ID!): Book
    author(id: ID!): Author
    books: [Book]!
    authors: [Author]!
  }

  type Mutation {
    addBook(name: String!, gerne: String!, authorId: ID!): Book
  }

  type Subscription {
    bookAdded: Book
  }

`;

module.exports = typeDefs;