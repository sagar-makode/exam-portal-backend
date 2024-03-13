const { Schema } = require('mongoose');
const mongoose = require('mongoose')

const url = "mongodb://localhost:27017/exam-portal"

const registerUserSchema = Schema({  
    firstName: String,
    lastName: String,
    email: String, 
    password: String,
    mobileNumber: Number,
    role: String
}, { versionKey: false });

const teacherSchema = Schema({  
    profileId : String
}, { versionKey: false });

const studentSchema = Schema({  
    profileId : String
}, { versionKey: false });

const collection = {};

collection.getUserRegisterSchema = async () => {
    try {
        const dbconnection = await mongoose.connect(url);
        const users = dbconnection.model('user', registerUserSchema);
        return users;
    } catch (error) {
        const err = new Error("Could not add the data");
        err.status = 500;
        throw err;
    }
};


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
module.exports = collection;
