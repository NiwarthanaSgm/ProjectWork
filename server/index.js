const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'doodus_db',
});

app.get("/", (req, res) => {

    const sqlInsert = "INSERT INTO catogery (Catogery_Id, CatogeryName, CreatedAt) VALUES (1, 'law', 5);"
    db.query(sqlInsert, (err, result)=>{
        res.send("NIWARTHANA SANDEEPANI");
    })
});

app.listen(3002, () => {
    console.log("running on port 3002");
});