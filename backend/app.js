/**
 * Backend Main Setting
 */

///// Library, Parameter
require("dotenv").config();
const express = require("express");
const morgan = require("morgan"); // middleware
const cors = require("cors");
const bodyParser = require('body-parser'); // Form parser 
const swaggerUI = require("swagger-ui-express"); // API Document
const swaggerSpec = require("./config/swagger"); // API Document
const session = require('express-session'); // Login session
const passport = require('passport'); // Login
require('./config/passport');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/API-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Login Session Setting
app.use(session({
    secret: process.env.Session_SecretKey,
    resave: false,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

///// Router
// app.use(process.env.API_PREFIX, userRoutes) 
app.use('/auth', require('./routes/auth_rt'));   // User: Register, Login....
// app.use('/test', require('./routes/test_rt'));   // Test router

app.listen(process.env.BackEndPort || 3000, () => {
    console.log(`Server is up and listening port is ${process.env.BackEndPort}`);
});


