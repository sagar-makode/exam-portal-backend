const { Schema } = require('mongoose');
const mongoose = require('mongoose')

const url = "mongodb://localhost:27017/exam-portal"

const registerUserSchema = Schema({
    name: String,
    email: String
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

module.exports = collection;
