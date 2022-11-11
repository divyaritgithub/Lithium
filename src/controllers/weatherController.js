let axios = require("axios")
let getWeather = async function(req,res){
    try {
        let arr =[]
        let city=["Bengaluru","Mumbai","Delhi","Kolkata","Chennai","London","Moscow","Patna"]
        for ( let i of city) {
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${i}&appid=dc25fe20a232f0a05c1452e1e2a61ebc`
        }
        let result = await axios(options);
        let temperature = result.data.main.temp
        let object = { city:i, temp: temperature}
        arr.push(object)
    }
        let sortedCities = arr.sort(function(x,y){return x.temp-y.temp});
        res.status(200).send (sortedCities)
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
module.exports.getWeather = getWeather