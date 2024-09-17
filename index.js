const express = require("express");
const app = express();
const port = 3000;
const connection = require("./connection");
const student = require('./routes/student');
connection();
app.use(express.json());
app.use(student);
app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(`app is listening on ${port}`);
    }
})