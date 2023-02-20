const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const cafeRouter = require("./cafeRouter");
const employeeRouter = require('./employeeRouter');

const app = express();
mongoose.Promise = global.Promise;

// Enabled CORS
app.use(cors());

app.options('*', cors()) // include before other routes

app.use(express.json());

mongoose
  .set("strictQuery", false)
  .connect(
    `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}?authSource=admin`
  )
  .then(
    () => {
      console.log("Database is connected");
    },
    (err) => {
      console.log("There is problem while connecting database " + err);
    }
  );

app.use("/cafes", cafeRouter);
app.use('/employees', employeeRouter);

module.exports = app;
