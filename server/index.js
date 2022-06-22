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

app.put("/update/Customer", (req, res) => {
    const fname = req.body.firstname;
    const lname = req.body.lastname;
    
    db.query ("UPDATE Customer SET FirstName = ?, LastName = ? WHERE CustomerID ='c1'", 
    [fname, lname], 
    (err, result) => {
        if(err){
            console.log(err);
        } else{
            res.send(result);
        }
      }
    );
});

app.put("/update/Serviceprovider/:id", (req, res) => {
    const cname = req.body.cname
    const Adname = req.body.Adname

    db.query ('UPDATE ServiceProvider SET FirstName = ?, LastName = ? WHERE SPID ="s1"', 
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

app.get('/getData', (req, res) => {

    // const id = req.params.id
  db.query("SELECT* FROM customer WHERE CustomerID = 'c1'", (err, result) => {
    if(err){
      console.log(err);
  } else{
      res.send(result);
  }
  })
})

app.listen(3005, () => {
    console.log("running backend on port 3005");
});