const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow cross origin request
app.use(cors());
mongoose.set("useUnifiedTopology", true);

mongoose.connect("mongodb+srv://nhatvu:pnnv2002@cluster0-u91zw.mongodb.net/test",{ useNewUrlParser: true });

mongoose.connection.once('open',() => {
  console.log('connected to database');
}) 

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql:true  
}))

app.listen(4000, () => {
  console.log('the server is running now')
})