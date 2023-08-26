const CustomAPIError=require('./custom-error')
const {StatusCodes}=require('http-status-codes')


class UnauthenticatedError extends CustomAPIError {
    constructor(message) {
      super(message)
      this.statusCode=StatusCodes.UNAUTHORIZED
      // this.statusCode = statusCode
      
    }
  }
  
  module.exports = UnauthenticatedError
  