const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const Schema = require("./graphql/Schema");
const resolvers = require("./graphql/Resolvers");
const cors = require('cors');
const bodyParser = require("body-parser");
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(
  "/graphql",
  graphqlHTTP({
    Schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

// Connect to MongoDB
const PORT = 8080;

mongoose
  .connect(
    `mongodb+srv://hrhasib:hrhasib11@cluster0.xwrudax.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("Database Connected Successfully!");

    app.listen(process.env.PORT || PORT, () => {
      console.log(`Server is running at http://localhost:${process.env.PORT || PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
