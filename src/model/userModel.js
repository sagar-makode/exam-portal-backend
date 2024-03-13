const dbmodel = require('../utilities/connections');

const userModel = {};


userModel.insertUsermdata = async (insdata) => {
    try {
        // let userModel = await dbmodel.getUserRegisterSchema();
        // let addData = await userModel.create(insdata);
        if (insdata.role === "Teacher") {
            let teacherData = await dbmodel.getTeacherSchema();
            await teacherData.create(insdata);
            return insdata
        } 
        
        else {
            let studentData = await dbmodel.getStudentSchema()
            await studentData.create(insdata)

            return insdata
        }

    } catch (error) {
        throw new Error("Error in inserting form data: " + error.message);
    }
};





userModel.chekStudentlogin = async (email, password) => {
    try {
        // Retrieve user data by email
        let loginModel = await dbmodel.getStudentSchema();
        let user = await loginModel.findOne({ email: email })

        if (user) {
            if (user.password === password) {
                return { message: "Login Success", id: user._id }
            } else {
                return { message: "Please Enter Correcet Password" }
            }
        } else {
            return { message: "Please Enter Correct Email" }
        }

    } catch (error) {
        // If any error occurs, rethrow it
        throw error;
    }
};

userModel.checkteacherlogin = async (email, password) => {
    try {
        // Retrieve user data by email
        let loginModel = await dbmodel.getTeacherSchema();
        let user = await loginModel.findOne({ email: email })

        if (user) {
            if (user.password === password) {
                return { message: "Login Success", id: user._id }
            } else {
                return { message: "Please Enter Correcet Password" }
            }
        } else {
            return { message: "Please Enter Correct Email" }
        }

    } catch (error) {
        // If any error occurs, rethrow it
        throw error;
    }
};



module.exports = userModel;
