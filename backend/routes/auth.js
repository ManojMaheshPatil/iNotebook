const express = require("express");
const User = require("../models/User"); // it is double dot not single dot
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var fetchuser= require('../middleware/fetchuser');  // It is double dot

const JWT_SECRET = 'Manojisagoodb$oy';

// Route 1 : Create a uUser using : POST "/api/auth/createuser". Doesn't require auth
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({min: 5,}),
  ],
  async (req, res) => {
    // If there are errors then return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Check whether the user with this email exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this mail exists already" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password,salt);
      // Create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data ={
        user: {
          id: user.id
        }
      }
      const authtoken = jwt.sign(data,JWT_SECRET); //jwt.sign is a sync method hence no need to add await to it. Hover to know if a method is sync or async
      
      // res.json(user);
      res.json({authtoken})

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// Route 2 : Authenticate a user using : POST /api/auth/login. No login required.
  router.post('/login',[
    body('email','Enter a valid email').isEmail(),
    body('password','Password cannot be blank').exists(),
  ],async(req,res)=>{
    //If there are errors , return Bad Request and the errors
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({errors:errors.array()});
    }
    const {email , password} = req.body;
    try{
      let user = await User.findOne({email});
      if(!user){
        return res.status(400).json({error:"Please try to login with correct credentials"});
      }

      const passwordCompare = await bcrypt.compare(password,user.password);
      if(!passwordCompare){
        return res.status(400).json({error:"Please try to login with correct credentials"});
      }

      const data = {
        user:{
          id: user.id 
        }
      }
      const authtoken = jwt.sign(data,JWT_SECRET);
      res.json({authtoken})
    }catch(error){
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  });

  // Route 3 : Get loggedin User Details usig : POST /api/auth/getuser. Login required
  router.post('/getuser',fetchuser,async(req,res) => {

    try{
      userId = req.user.id;
      const user = await User.findById(userId).select("-password");
      res.send(user);
    }catch(error){
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  })


module.exports = router;
