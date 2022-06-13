const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require("cors");


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'project_db',
});

// app.get("/", (req, res) => {

//     //const sqlInsert = "INSERT INTO catogery (CatogeryName, CreatedAt) VALUES ('Legal', 'cc1');"
//     const sqlDelete = "Delete from catogery where CatogeryName = 'Advisor';"
//     db.query(sqlDelete, (err, result)=>{
//         res.send("NIWARTHANA SANDEEPANI");
//     })
// });

app.post("/create", (req, res) => {
    const cname = req.body.cname
    const Adname = req.body.Adname

    db.query ('INSERT INTO catogery (CatogeryName, CreatedAt) VALUES (?, ?)', 
    [cname, Adname], 
    (err, result) =>{
        if(err){
            console.log(err);
        } else{
            res.send("values sent");
        }
      }
    );
});

app.listen(3002, () => {
    console.log("running backend on port 3002");
});