const express = require('express');
const router = express.Router();
const User  = require('../models/User');
const bcrypt = require('bcryptjs');
const Validator = require ('validator');
const isEmpty = require ('lodash/isEmpty');
const {validateLogin, validateInput} = require('../validation/validation');
const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../config/jwt');









router.post('/', (req, res)=>{

	
});


//Login 
router.get('/login', (req, res)=> res.send('Login'));



router.post('/login', (req, res)=>{

    const {errors, isValid } = validateLogin(req.body);
   if(isValid){

	const email= req.body.email;
	const password = req.body.password;



User.findOne({ email:email}).then(user =>{


        if (!user) {
         
         res.status(400).json({error: 'incorrect email/password'});
       

        }else{

       bcrypt.compare(password, user.password, (err, matched)=>{

    
 

    if(matched){
     
     const token = jwt.sign({
      
      id: user.id,
      username: user.username
     }, jwtSecret);

     

      return res.json({ token });


    }else{

   return res.status(400).json({error: 'incorrect password'});

        }

      });

     
       }
         
   });
  
}else{

  res.status(401).json(errors);
}
  

});




//Register 
router.get('/register', (req, res)=> res.send('Register'));


router.post('/register', (req, res)=>{

	const {errors, isValid } = validateInput(req.body);

	if(isValid){

User.findOne({email: req.body.email}).then(user=>{

if(!user){
		const newUser = new User();

newUser.username = req.body.username;
newUser.email = req.body.email;
newUser.password =req.body.password;

   bcrypt.genSalt(10,(err, salt)=>{
   bcrypt.hash(newUser.password, salt, (err, hash)=>{
   newUser.password = hash;


newUser.save().then(savedUser=>{

res.send('user saved');

  });
 });
});

}else{

	res.status(400).json({error:'This email exsist! try login or try different email'});
  }
});
	}else{

		res.status(400).json(errors);
	}



});


module.exports = router;


