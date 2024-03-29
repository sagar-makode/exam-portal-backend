const { Schema } = require('mongoose');
const mongoose = require('mongoose')

const url = "mongodb://localhost:27017/exam-portal"


const teacherSchema = Schema({  
    name: String,
    email: String, 
    password: String,
    mobileNumber: Number,
}, { versionKey: false });

const studentSchema = Schema({  
    name: String,
    email: String, 
    password: String,
    mobileNumber: Number,
}, { versionKey: false });


const testSchema = Schema({  
    teacherId: mongoose.Schema.Types.ObjectId, // Assuming teacher ID is stored in teacherProfileData.id
    testName : String,
    totalMinutes : Number,
    category : String,
    questions: Array,
    totalMarks: Number,
    correctAnswers: Array,
    submitedBy: Array
}, { versionKey: false });

const collection = {};



collection.getTeacherSchema = async () => {
    try {
        const dbconnection = await mongoose.connect(url);
        const users = dbconnection.model('teacher', teacherSchema);
        return users;
    } catch (error) {
        const err = new Error("Could not add the data");
        err.status = 500;
        throw err;
    }
};

collection.getStudentSchema = async () => {
    try {
        const dbconnection = await mongoose.connect(url);
        const users = dbconnection.model('student', studentSchema);
        return users;
    } catch (error) {
        const err = new Error("Could not add the data");
        err.status = 500;
        throw err;
    }
};

collection.gettestSchema = async () => {
    try {
        const dbconnection = await mongoose.connect(url);
        const test = dbconnection.model('test', testSchema);
        return test;
    } catch (error) {
        const err = new Error("Could not add the data");
        err.status = 500;
        throw err;
    }
};
module.exports = collection;
