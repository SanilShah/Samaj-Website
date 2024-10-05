const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const mysql = require("mysql");
const FormDataModel = require("./models/FormData");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/samaj-website");

// Create MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // your MySQL username
  password: "root", // your MySQL password
  database: "VVP",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection error:", err);
    return;
  }
  console.log("Connected to the MySQL database.");
});

app.post("/register", (req, res) => {
  // To post / insert data into database

  const { email, password } = req.body;
  FormDataModel.findOne({ email: email }).then((user) => {
    if (user) {
      res.json("Already registered");
    } else {
      FormDataModel.create(req.body)
        .then((log_reg_form) => res.json(log_reg_form))
        .catch((err) => res.json(err));
    }
  });
});

app.post("/login", (req, res) => {
  // To find record from the database
  const { email, password } = req.body;
  FormDataModel.findOne({ email: email }).then((user) => {
    if (user) {
      // If user found then these 2 cases
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("Wrong password");
      }
    }
    // If user not found then
    else {
      res.json("No records found! ");
    }
  });
});

// Endpoint to fetch all people
app.get("/api/people", (req, res) => {
  const query = "SELECT id, name FROM people";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching data:", err);
      res.status(500).send("Server Error");
    } else {
      res.json(results);
    }
  });
});

app.listen(3001, () => {
  console.log("Server listining on http://127.0.0.1:3001");
});
