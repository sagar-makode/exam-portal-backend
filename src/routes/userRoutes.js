const express = require('express');
const router = express.Router();
const userService = require('../service/userService');


router.post('/register', async (req, res, next) => {
    console.log("call");
    try {
        const { firstName,lastName, email, password, mobileNumber,role } = req.body;
        let adduser = await userService.insertData({ firstName,lastName, email, password, mobileNumber,role});
        

        if (adduser)
            res.json({ 'message': "Successfully added" });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
