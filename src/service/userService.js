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

userService.userData = async (id) => {
    try {
        let insertForm = await dbservice.findUser(id);
        if (insertForm) {
            return insertForm;
        } else {
            return "";
        }
    } catch (error) {
        throw new Error("Error in Login: " + error.message);
    }
};

userService.InsertTest = async (data) => {
    try {
        let inserttest = await dbservice.inserTestData(data);
        if (inserttest) {
            return inserttest;
        } else {
            return "";
        }
    } catch (error) {
        throw new Error("Error in inserting data: " + error.message);
    }
};

userService.testData = async () => {
    try {
        let tests = await dbservice.findTestData();
        if (tests) {
            return tests;
        } else {
            return "";
        }
    } catch (error) {
        throw new Error("Error in finding test: " + error.message);
    }
};

userService.inserExamtData = async (data) => {
    try {
        let insertexamdata = await dbservice.insertexamdata(data);
        if (insertexamdata) {
            return insertexamdata;
        } else {
            return "";
        }
    } catch (error) {
        throw new Error("Error in inserting data: " + error.message);
    }
};





module.exports = userService;
