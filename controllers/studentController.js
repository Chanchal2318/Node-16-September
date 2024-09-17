const mongoose = require("mongoose");
const Student = require('../models/student');
async function addStudent(req,res){
    try{
       console.log(req.body,'req.body');
       let student = new Student(req.body);
       await student.save();
       console.log("Data saved successfully....");
       res.end("added...");
    }catch(err){
       console.log(err)
    }
}
async function getStudents(req,res){
    try{
        let students = await  Student.find({});
        console.log(students);
        res.send(students);
    }catch(err){

    }
}
async function getStudentsByRollNo(req,res){
    try{
        let rollNo = req.params.rollNo;
        console.log(rollNo,'rollNo');
        let student = await  Student.findOne({rollNo: rollNo});
        console.log(student);
        res.send(student);
    }catch(err){
        console.log(err,'err');
    }
}
module.exports = {
    addStudent,
    getStudents,
    getStudentsByRollNo
}