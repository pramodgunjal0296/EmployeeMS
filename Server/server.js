import express from "express";
import mysql from "mysql2";
import cors from "cors";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

const con = mysql.createConnection({
  host: "localhost",
  user: "pramod",
  password: "Pramod@9762",
});

con.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("connected");
  }
});

app.listen(8081, () => {
  console.log("Running");
});
