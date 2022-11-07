const jwt =require("jsonwebtoken")
const UserModel = require("../models/userModel")
//--------------creating USer ----------------------------//
const createUser = async function (req,res){
  let data = req.body
  let savedData = await UserModel.create(data)
  res.send ({msg : savedData})
}
//----------------logging user------------------//
const loginUser = async function (req, res) {
  let emailId = req.body.emailId;
  let password = req.body.password;

  let user = await UserModel.findOne({ emailId: emailId, password: password });
  if (!user)
    return res.send({
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
  res.send({ status: true, token: mytoken });
};
//-----------------getting user data-----------------//
const getUserData = async function(req,res){
  let data = req.params.userId;
  let user = await UserModel.findById({_id:data})
  if (!user) 
  res.send({msg : " No user exist"})
  res.send({status : true, data : user})
}
//-------------------Update User-------------------//
const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await UserModel.findById(userId);
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await UserModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
  res.send({ status: updatedUser, data: updatedUser });
};
//--------------------deleted User-------------------------//
const deleteUser = async function (req, res) {
  let userId = req.params.userId;
  

  let userData = req.body;
  let deletedUser = await UserModel.updateMany({ _id: userId },{$unset:userData},{new:true});
  let updatedUser = await UserModel.find({ _id: userId} );

  res.send({ status: deletedUser , data:updatedUser});
};
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
