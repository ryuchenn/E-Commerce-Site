//////////////////////////
/// Backend Setting
//////////////////////////

require("dotenv").config();
const express = require("express");
const morgan = require("morgan"); // middleware
const cors = require("cors");
const db = require("./db");
const app = express();
const port = process.env.Port || 3000;

app.use(cors());
app.use(express.json());

app.listen(port, () =>{
    console.log(`Server is up and listening port is ${port}`);
});