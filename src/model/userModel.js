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

userModel.findUser = async (id) => {
    try {
        // Retrieve user data by email
        let studentModel = await dbmodel.getStudentSchema();
        let student = await studentModel.findOne({ _id: id })
        if (student) {
            user = student.toObject(); // Convert Mongoose document to plain JavaScript object
            user.role = 'student';
            console.log(user,"1");
            return user
        }

        let teacherModel = await dbmodel.getTeacherSchema();
        let teacher = await teacherModel.findOne({  _id: id })
        if (teacher) {
            user = teacher.toObject(); // Convert Mongoose document to plain JavaScript object
            user.role = 'teacher';
            console.log(user,"2");
            return user
        }
        
            return  "UserNot Found" 
        

    } catch (error) {
        // If any error occurs, rethrow it
        throw error;
    }
};




userModel.inserTestData = async (data) => {
    try {
      
            let testData = await dbmodel.gettestSchema();
            await testData.create(data);
            return data  
       

    } catch (error) {
        throw new Error("Error in inserting form data: " + error.message);
    }
};


userModel.findTestData = async () => {
    try {
      
            let findtestData = await dbmodel.gettestSchema();
            let data = await findtestData.find();
            return data
       

    } catch (error) {
        throw new Error("Error in inserting form data: " + error.message);
    }
};


userModel.insertexamdata = async (insdata) => {
    try {
        let findtestData = await dbmodel.gettestSchema();
        const test = await findtestData.findById(insdata.testId);
        // console.log(test);
        // test.submitedBy.push({
        //     userAnswers: insdata.userAnswers,
        //     totalQuestions: insdata.totalQuestions,
        //     correctAnswers: insdata.correctAnswers,
        //     totalMarks: insdata.totalMarks,
        //     obtainedMark: insdata.obtainedMark,
        //     passStatus: insdata.passStatus,
        //     testName: insdata.testName,
        //     name: insdata.name,
        //     submitterId: insdata.submitterId
        // });



    } catch (error) {
        throw new Error("Error in inserting form data: " + error.message);
    }
};



module.exports = userModel;
