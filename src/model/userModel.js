const dbmodel = require('../utilities/connections');

const userModel = {};


userModel.insertUsermdata = async (insdata) => {
    try {
        let userModel = await dbmodel.getUserRegisterSchema();
        let addData = await userModel.create(insdata);
        if (addData) {
            if (addData.role=== "Teacher") {
                const tdata = {
                    profileId : addData._id
                }
              let teacherData =   await  dbmodel.getTeacherSchema();
              await teacherData.create(tdata);
                
                
            } else {
                const sdata = {
                    profileId : addData._id
                }
                let studentData = await dbmodel.getStudentSchema()
                    await studentData.create(sdata)
                
            }
            return addData;
        } else {
            return "";
        }

    } catch (error) {
        throw new Error("Error in inserting form data: " + error.message);
    }
};



module.exports = userModel;
