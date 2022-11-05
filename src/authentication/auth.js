const jwt = require("jsonwebtoken");
const express = require('express');
const router = express.Router();
const auth =async function (req,res,next){
    let x=req.headers['x-auth-token']
  // console.log(x)
  if(!x){
    return res.send("header missing")
  }
  let decodedToken = jwt.verify(x, "functionup-Lithium-very-very-secret-key")
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" })
  next()
}
module.exports=router