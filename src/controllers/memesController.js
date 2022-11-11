let axios = require("axios")
const memesById = async function(req,res){
    try{
        let username = req.query.username
        let password = req.query.password
        let txt0 = req.query.text0
        let temp_id = req.query.template_id
        let options =  {
            method : "post",
            url : `https://api.imgflip.com/caption_image?template_id=${temp_id}&text0=${txt0}&username=${username}&password=${password}`
        }
        let result=await axios(options);
        console.log(result);
        let data = result.data
        res.status(200).send({msg : data, status : true})
        }
    catch (err){
        console.log(err)
        res.status(500).send({msg:err.message})
    }
    }
module.exports.memesById = memesById