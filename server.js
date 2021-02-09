//requiring express for server handling, Mongoose for Mongo DB and logger for logging mongo requests

const express = require("express");
const mongoose = require("mongoose");
const logger = require('morgan');

//requires in data model

const Fitness = require("./models/fitness.js");

//either uses the environment port where deployed or localhost3000

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//logic for connecting mongo in heroku

mongoose.connect(
  
  process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

//html and api files for routes

app.use(require("./routes/html-routes.js"));
app.use(require("./routes/api-routes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
