const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


//create Database Connection
const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: "",
    database: "juicy_database"
})



//inserting credentials for signup
app.post('/signup',(req, res) =>{
    const sql = "INSERT INTO signup (`name`,`email`,`phone_number`,`address`,`password`,`birthday`) VALUES (?)";
    const values =[
    req.body.name,
    req.body.email,
    req.body.phone_number,
    req.body.address,
    req.body.password,
    req.body.birthday
    ]
    db.query(sql,[values],(err, data)=>{
         if(err){
            return res.json("Error");
         }
         return res.json(data);
    })
})

//request to login
app.post('/login',(req, res) =>{
    const sql = "SELECT * FROM signup WHERE `email` = ? AND `password` =?";
    db.query(sql,[req.body.email,req.body.password],(err, data)=>{
         if(err){
            return res.json("Error");
         }
         if(data.length > 0){
            return res.json("success");
         } else{
            return res.json("failed");
         }
    })
})




//test console if database is working
app.listen(8081,()=>{
    console.log("listening");
} )