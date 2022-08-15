const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();

const UserModel = require("./models/Users");

app.use(express.json());
app.use(cors());

const MY_MONGO = process.env.REACT_APP_MY_MONGO;

//Connect to Mongo DB
mongoose.connect(MY_MONGO);

//Get Users List
app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

//Create new User
app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

//Node server ready to listen on spedified port
app.listen(3001, () => {
  console.log("SERVER RUNS PERFECTLY!");
});

