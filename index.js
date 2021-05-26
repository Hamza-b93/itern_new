const express = require('express');
const app = express();
const session = require("express-session");
const joi = require('joi');
const mysql = require("mysql");

const dbConnection = mysql.createConnection({

});

const port = process.env.port || 5000;

const loginRoute = require("./routes/login.js");
const logoutRoute = require('./routes/logout.js');
const rootRoute = require('./routes/root.js');
const registerRoute = require('./routes/register.js');
const errorRoute = require("./routes/errorHandling.js");
const apiRoute = require('./routes/restapi.js');

app.listen(port, () => {
  console.log("app is runnng on port: " + port);
});

app.use(express.urlencoded());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('access-control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
});

app.use(session({
  secret: '3r0398nqruq3vn0r3qu09nvrqur309nvq3rn',
  resave: false,
  saveUninitialized: false
}));

app.use("/login", loginRoute);
app.use('/logout', logoutRoute);
app.use("/", rootRoute);
app.use("/register", registerRoute);
app.use('/error', errorRoute);
app.use("/api", apiRoute);
