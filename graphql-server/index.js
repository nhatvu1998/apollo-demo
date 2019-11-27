const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require('./schema');
const resolvers = require('./resolvers')
const mongoose = require("mongoose");
const Book = require("./models/book");
const Author = require("./models/author");


mongoose.set("useUnifiedTopology", true);

mongoose.connect(
  "mongodb+srv://nhatvu:pnnv2002@cluster0-u91zw.mongodb.net/test",
  { useNewUrlParser: true }
);

mongoose.connection.once("open", () => {
  console.log("connected to database");
}); 

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req, connection }) => ({
    Book,
    Author,
    
  })
});

// The `listen` method launches a web server.
server.listen(5000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});