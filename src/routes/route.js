const express = require('express');
const router = express.Router();
//---------------------------------------------Question 1 -----------------------------------------------------------//
//Create an API for GET /movies that returns a list of movies. Define an array of movies in your code and return the value in response.//
router.get('/movies', function (req,res){
    
    const movies=["Rang de basanti","the shining","Lord of the rings","Batman begins"]
    res.send(movies)
})
//----------------------------------------------Question 2 & 3---------------------------------------------------------------//
/*Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request and it should return the movie in your array at index 1).
 You can define an array of movies again in your api[‘Rang de basanti’, ‘The shining’, ‘Lord of the rings’, ‘Batman begins’]/movies/2
Handle a scenario in problem 2 where if the index is greater than the valid maximum value a message is returned that tells the user to use a valid index in an error message.*/

router.get('/movies/:indexNumber', function (req,res){
     let movies1=["Rang de basanti","the shining","Lord of the rings","Batman begins"]
     
     let index=req.params.indexNumber
     console.log(movies1[index]);
     res.send("At index : - "+movies1[index])
})
//------------------------------------------------Question 4 -----------------------------------------------------------//
/*Write another api called GET /films. Instead of an array of strings define an array of movie objects this time. 
Each movie object should have values - id, name.*/
router.get('/films', function (req,res){
    
    const fid=[ {
        id: 1,
        name: "Rang de basanti"
       },
        {
        id: 2,
        name: "The shining"
       }, {
        id: 3,
        name: "Lord of the rings"
       }, {
        id: 4,
        name: "Batman begins"
       }]
       
    res.send(fid)
})
//-------------------------------------------------------Question 5---------------------------------------------------//
/*Write api GET /films/:filmId where filmId is the value received in request path params. Use this value to return a movie object with this id. In case there is no such movie present in the array, return a suitable message in the response body. Example for a request GET /films/3 should return the movie object 
{
 “id”: 3,
 “name”: “Rang de Basanti”
}
Similarly for a request GET /films/9 the response can be something like - ‘No movie exists with this id’*/

router.get('/films/:id', function (req,res){

    let idParam=req.params
    const fid=[ {
        id: 1,
        name: "The Shining"
       },
        {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Nemo"
       }]
       if(idParam.id>(fid.length+1)||idParam.id==0){
        res.send("No movie exists with this id")
        
    }      
       for(i of fid){
        if(i.id==idParam.id){
            console.log(i)
            res.send(i.name)
        }
       }
})
module.exports = router;