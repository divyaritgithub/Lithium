
const mid1= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}
const mid5=function (req, res, next) {
    let timeStamp = moment().format("YYYY-MM-DD h:m:s")
    let ip; req.socket.remoteAddress
    let route =req.path
    console.log(timeStamp,",",ip,",",route)
    res.send({ts:ts,ip:ip,route:url})
    next()

}

module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4
module.exports.mid5= mid5