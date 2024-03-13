const dbmodel = require('../utilities/connections');

const userModel = {};


userModel.insertUsermdata = async (insdata) => {
    try {
        let userModel = await dbmodel.getUserRegisterSchema();
        let addData = await userModel.create(insdata);
        if (addData) {
            return addData;
        } else {
            return "";
        }
    } catch (error) {
        throw new Error("Error in inserting form data: " + error.message);
    }
};

module.exports = userModel;
