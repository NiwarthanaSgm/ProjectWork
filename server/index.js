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

    const sqlInsert = "INSERT INTO catogery (CatogeryName, CreatedAt) VALUES ('Designer', 'cc1');"
    db.query(sqlInsert, (err, result)=>{
        res.send("NIWARTHANA SANDEEPANI");
    })
});

app.listen(3002, () => {
    console.log("running backend on port 3002");
});