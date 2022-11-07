const jwt = require("jsonwebtoken");
const authenticate = function(req, res, next) {
    let token=req.headers["x-auth-token"];
    
    if(!token){
       res.send({msg: "header missing"})}
    let decodedToken = jwt.verify(token,"functionup-lithium-very-very-secret-key")
    if (!decodedToken)  return res.send({ status: false, msg: "token is invalid" })
    req.decodedToken = decodedToken
     next()
}
const authorise = function(req,res,next){
  let token =req.headers["x-auth-token"];
  let decodedToken = jwt.verify(token,"functionup-lithium-very-very-secret-key")
  let checkUserId = req.params.userId;
 
  if (!checkUserId)
     return res.send("msg : userid doesn't exist")
     let userLoggedIn =decodedToken.userId
     if(userLoggedIn!=checkUserId) return res.send({ msg: "UserId Is Missing"})
     
next()
}

module.exports.authenticate=authenticate
module.exports.authorise=authorise
