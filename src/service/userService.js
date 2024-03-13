const dbservice = require('../model/userModel');

const userService = {};

userService.insertData = async (data) => {
    try {
        let insertForm = await dbservice.insertUsermdata(data);
        if (insertForm) {
            return insertForm;
        } else {
            return "";
        }
    } catch (error) {
        throw new Error("Error in inserting data: " + error.message);
    }
};

userService.studentlogin = async (email,password) => {
    try {
        let insertForm = await dbservice.chekStudentlogin(email,password);
        if (insertForm) {
            return insertForm;
        } else {
            return "";
        }
    } catch (error) {
        throw new Error("Error in Login: " + error.message);
    }
};

userService.teacherlogin = async (email,password) => {
    try {
        let insertForm = await dbservice.checkteacherlogin(email,password);
        if (insertForm) {
            return insertForm;
        } else {
            return "";
        }
    } catch (error) {
        throw new Error("Error in Login: " + error.message);
    }
};




module.exports = userService;
