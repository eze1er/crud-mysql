const express = require("express");
const app = express();

// How to access my Sql DB

const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "CRUDDtaBase",
});

app.get("/", (req, res) => {
  const sqlInsert =
    "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('inception', 'good movie');";
  db.query(sqlInsert, (err, result) => {
    res.send("Hello Ezechiel");
  });
});

app.listen(3001, () => {
  console.log("Server Run in prot 3001");
});
