const jwt= require('jsonwebtoken')
// const CustomAPIError =require('../errors/custom-error')
const{UnauthenticatedError}=require('../errors/index')


const authenticationMiddleware=async(req,res,next)=>{
    // console.log(req.headers.authorization)
    const authHeader= req.headers.authorization
    if(!authHeader||!authHeader.startsWith('Bearer ')){
        throw new UnauthenticatedError('No token provided...')
    }
    const token=authHeader.split(' ')[1]
    console.log(`token:${token}`)
    try {
        const decode= jwt.verify(token,process.env.JWT_SECRET)
        // console.log(decode)
        const{id,username}=decode
        req.user={id,username}
        next()
          } catch (error) {
        throw new UnauthenticatedError('Not authorized to access this route or invalid token')
        
    }
}

module.exports=authenticationMiddleware