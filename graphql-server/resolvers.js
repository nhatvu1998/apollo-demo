const Book = require("./models/book");
const Author = require("./models/author");
const BOOK_ADDED = "BOOK_ADDED";

const { PubSub } = require("apollo-server");

const pubsub = new PubSub();

module.exports = {
  Query: {
    books: () => Book.find({}),
    authors: () => Author.find({}),
    book: (_, args) => Book.findById(args.id),
    author: (_, args) => Author.findById(args.id)
  },

    Book: {
    author: (parent, _) => Author.findById(parent.authorId)
  },

  Author: {
    books: (parent, _) => Book.find({ authorId: parent._id })
  },

  Mutation: {
    addBook: (_, args) => {
      let book = new Book({
        name: args.name,
        gerne: args.gerne,
        authorId: args.authorId
      });
      pubsub.publish(BOOK_ADDED, { bookAdded: args });
      return book.save();
    }
  },

  Subscription: {
    bookAdded: {
      subscribe: () => pubsub.asyncIterator([BOOK_ADDED])
    }
  }
};