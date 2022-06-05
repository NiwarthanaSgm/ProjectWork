const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'project_db',
});

app.get("/", (req, res) => {
    res.send("hello niwa!");
});

app.listen(3002, () => {
    console.log("running on port 3002");
});