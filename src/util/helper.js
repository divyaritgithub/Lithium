function asd(){
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
 
    const d = new Date();
     let name =month[d.getMonth()]
    let monthname = d.getMonth()+1
    const mydata="Lithium, W3D5, the topic for today is Nodejs module system"
    console.log(d)
    console.log(name)
    console.log(monthname)
    console.log(name,"is the",monthname,"month of the year")
    console.log(mydata)
    
    return "done"
 }
 
 module.exports.myasd=asd
