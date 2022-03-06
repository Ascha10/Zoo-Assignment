const User = require('../Models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


let signupPost = async (req,res)=>{
  const {email,password} = req.body;

  if(await User.exists({email:email})) return res.status(400).send({message:"Email Already Exists"});

  bcrypt.hash(password,10,async (err,hashPassword) => {
      if(err) return res.status(500).send({message: err});

      req.body.password = hashPassword;
      await  User.create(req.body) 
          .then(result=> res.status(200).send({message:"User has been Added",result}))
          .catch(err=> res.status(500).send(err))
  })
}

let loginPost  = async (req,res)=>{
  const {email,password} = req.body;

  if(User.exists(email) == false) return res.status(400).send({message:"User not exist"});

  await User.findOne({email}).then(user=> {

    const {_id,userName,email,role} = user;

      bcrypt.compare(password ,user.password,(err,isMatch) => {
      if(err) return res.status(400).send({message:"error in pas"})
      if(!isMatch) return res.status(403).send({message: "Incorrect Password"})

      jwt.sign({_id,userName,email,role},process.env.SECRET_KEY,{expiresIn:'1H'},(err,accessToken)=>{
          if(err) return res.status(400).send({message:"Error"})
          res.status(200).send({message:"Login Sucssefuly",accessToken});
      })

      user.isLogin = true;
      user.save();
      console.log(user);

  })
  })
  .catch((err)=>{res.status(400).send({message:`${err}`})})
}


let logout = async (req, res) => {

  
    foundUser.isLogin = false;
    const result = await foundUser.save();
    console.log(result);
}

module.exports = {
  signupPost,
  loginPost,
  logout
};