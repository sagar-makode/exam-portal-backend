const express = require('express');
const router = express.Router();
const userService = require('../service/userService');
const jwt = require('jsonwebtoken');
const verifyJWT  = require('../midalware/auth.midalware');


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
      console.log(user.message);
     
      const token = jwt.sign({ userId : user.id }, "mykey", { expiresIn: '1h' });
  

      if (!user || user.message !== "Login Success") {
        // If login failed, return an error response
        return res.status(401).json({ message: "Invalid credentials" });
    }
      // If login is successful, send user data as response
      const options = {
        httpOnly: true,
        secure: true
    }


    return res
    .status(200)
    .cookie("token", token, options)
    .json( {token, user} )
      
      
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
      console.log(user);

        
      const token = jwt.sign({ userId : user.id }, "mykey", { expiresIn: '1h' });
      console.log(token);
  
      // If login is successful, send user data as response
      const options = {
        httpOnly: true,
        secure: true
    }
    if (!user || user.message !== "Login Success") {
      // If login failed, return an error response
      return res.status(401).json({ message: "Invalid credentials" });
  }

  
      // If login is successful, send user data as response
      return res
      .status(200)
      .cookie("token", token, options)
      .json( {token, message: "User logged in successfully"} )
        
    } catch (error) {
      // Pass any errors to the error handling middleware
      next(error);
    }
  });

  router.get("/dashboard",verifyJWT,async(req, res, next)=>{
    const userData = await userService.userData(req.userId);
      res.json(userData)

  })



  router.post('/createtest', async (req, res, next) => {
   
    try {
      
   
        const { teacherId,testName, totalMinutes, category, questions,correctAnswers,totalMarks } = req.body;
        let addtest = await userService.InsertTest({ teacherId,testName, totalMinutes, category, questions,correctAnswers ,totalMarks});
        

        if (addtest)
            res.json({ 'message': "Successfully added test" });
    } catch (error) {
        next(error);
    }
});







router.get("/tests",async(req, res, next)=>{
  const testData = await userService.testData();
    res.json(testData)

})


module.exports = router;
