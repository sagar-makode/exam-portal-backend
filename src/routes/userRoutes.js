const express = require('express');
const router = express.Router();
const userService = require('../service/userService');


router.post('/register', async (req, res, next) => {
    try {
        const { name, email } = req.body;
        let adduser = await userService.insertData({ name, email});

        if (adduser)
            res.json({ 'message': "Successfully added" });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
