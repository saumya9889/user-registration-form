
const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup"
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('MySQL connected...');
});

app.post("/signup", (req, res) => {
  const sql = "INSERT INTO signup (`name`, `email`, `password`) VALUES (?,?,?)";
  const values = [
    req.body.name,
    req.body.email,
    req.body.password
  ];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.json("Error");
    }
    return res.json(data);
  });
});

app.listen(8081, () => {
  console.log("Server started on port 8081");
});
