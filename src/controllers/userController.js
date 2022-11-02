const UserModel= require("../models/userModel")




const basicCode= async function(req, res) {
    let tokenDataInHeaders= req.headers.token
    console.log(tokenDataInHeaders)

    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    res.send({ msg: "This is coming from controller (handler)"})
    }

const getIpAdress = async function (req,res) {
    res.send({msg: "this is for IP Adress"})
}
const getCurrentTime = async function (req,res){
    res.send ({msg : "this is For Current Time"})
}
const getPath = async function (req,res){
    res.send ({msg: "this is for GetPath details"})
}

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode
module.exports.getCurrentTime= getCurrentTime
module.exports.getIpAdress= getIpAdress
module.exports.getPath= getPath