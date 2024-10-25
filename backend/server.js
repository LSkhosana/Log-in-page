const express = require("express");
const mysql2 = require("mysql2");
const cors = require("cors")

const app = express();
app.use(cors());

const db =mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
})