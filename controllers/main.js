require('dotenv').config()
const jwt= require('jsonwebtoken')
const {BadRequest} =require('../errors/index')
const login= async(req,res)=>{
    const {username,password}= req.body
    //validation can be provided in two ways 
    //using mongo's required parameter
    //using a package known as Joy
    //validating withing the controller itself
    if(!username||!password){
        throw new BadRequest('Please provide Email and password')
    }
    const id= new Date().getDate()
    const token=jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})
    console.log(`your user name and password:${username}--${password}`)
    // res.status(200).send("Fake login/Regiser/signUp route")
    res.status(200).json({msg:'user created',token})
}

const dashboard=async (req,res)=>{

    console.log(req.user)
    // console.log(req)
    const {user}=req
    const luckyNumber= Math.floor(Math.random()*100)
    res
      .status(200)
      .json({
        msg: `hello ${user.username} Doe`,
        secret: `Here is you secret authentication data with lucky number:${luckyNumber}`,
      });


}

module.exports={
    login, dashboard
}