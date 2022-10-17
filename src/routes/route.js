const express = require('express');
const router = express.Router();///test-you

const xyz = require('../logger/logger')
const qwa = require('../util/helper')
const edc = require('../validator//formatter')

const underscore = require('underscore')
var _ = require('lodash');

router.get('/test-me', function (req, res) {

 console.log("Calling my function ",xyz.myFunction())

 console.log("sollution of Problem 2 Module 2",qwa.myasd())

 console.log("sollution of Problem 3 Module 3",edc.nfn())




const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
console.log(_.chunk(months,4))

const oddnum=[1,3,5,7,9,11,13,15,17,19];
console.log(_.tail(oddnum,9));

const allnum=[2,5,4,2,7,4]
console.log(_.union(allnum));

const pair=[['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]

console.log(_.fromPairs(pair));
    
    
    res.send('My First Ever Api!')

   
});

module.exports = router;