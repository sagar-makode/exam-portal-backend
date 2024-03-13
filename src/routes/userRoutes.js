const express = require('express');
const router = express.Router();
const userService = require('../service/userService');


router.post('/register', async (req, res, next) => {
   
    try {
        const { firstName,lastName, email, password, mobileNumber,role } = req.body;
        let adduser = await userService.insertData({ firstName,lastName, email, password, mobileNumber,role});
        

        if (adduser)
            res.json({ 'message': "Successfully added" });
    } catch (error) {
        next(error);
    }
});


router.post('/studentlogin', async (req, res, next) => {
    try {
      const { email, password } = req.body;
  
      // Call the login method from the authService
      const user = await userService.studentlogin(email, password);
  
      // If login is successful, send user data as response
      res.json(user);
      
    } catch (error) {
      // Pass any errors to the error handling middleware
      next(error);
    }
  });

  router.post('/teacherlogin', async (req, res, next) => {
    try {
      const { email, password } = req.body;
  
      // Call the login method from the authService
      const user = await userService.teacherlogin(email, password);
  
      // If login is successful, send user data as response
      res.json(user);
      
    } catch (error) {
      // Pass any errors to the error handling middleware
      next(error);
    }
  });

module.exports = router;
