const jwt =require("jsonwebtoken")
const UserModel = require("../models/userModel")
//--------------creating USer ----------------------------//
const createUser = async function (req,res){
  try {
    let data = req.body
    console.log(data);
    if (Object.keys(data).length !=0){
  let savedData = await UserModel.create(data)
  res.status(201).send ({msg : savedData})
}
 else res.status(400).send({msg : "BAD REQUEST"})
  }
catch (err){
  console.log("This is error",err.message)
  res.status(500).send({msg : "Error",error: err.message})

}
}
//----------------logging user------------------//
const loginUser = async function (req, res) {
  try{
  let emailId = req.body.emailId;
  let password = req.body.password;

  let user = await UserModel.findOne({ emailId: emailId, password: password });
  if (!user)
    return res.status(400).send({
      status: false,
      msg: "username or the password is not corerct",
    });
  let mytoken = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "lithium",
      organisation: "FunctionUp",
    },
    "functionup-lithium-very-very-secret-key"
  );
  res.setHeader("x-auth-token", mytoken);
  res.status(201).send({ status: true, token: mytoken });
  }catch (err){
    console.log("This is your blunder mistake:",err.message)
    res.status(500).send({msg : "Error",error: err.message})
  
  }
};
//-----------------getting user data-----------------//
const getUserData = async function(req,res){
  try{
  let data = req.params.userId;
  let user = await UserModel.findById({_id:data})
  if (!user) 
  res.statu(400).send({msg : " No user exist"})

  res.status(200).send({status : true, data : user})
  }
  catch (err){
    console.log("This is your blunder mistake:",err.message)
    res.status(500).send({msg : "Error",error: err.message})
  
  }
}
//-------------------Update User-------------------//
const updateUser = async function (req, res) {
  try{
  let userId = req.params.userId;
  let user = await UserModel.findById(userId);
  if (!user) {
    return res.status(400).send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await UserModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
  res.status(200).send({ status: updatedUser, data: updatedUser });
  }
  catch (err){
    console.log("This is your blunder mistake:",err.message)
    res.status(500).send({msg : "Error",error: err.message})
  
  }
};
//--------------------deleted User-------------------------//
const deleteUser = async function (req, res) {
  try{
  let userId = req.params.userId;
  let userData = req.body;
  let deletedUser = await UserModel.updateMany({ _id: userId },{$unset:userData},{new:true});
  let updatedUser = await UserModel.find({ _id: userId} );

  res.status(200).send({ status: deletedUser , data:updatedUser});
}
catch (err){
  console.log("This is your blunder mistake:",err.message)
  res.status(500).send({msg : "Error",error: err.message})

}
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
