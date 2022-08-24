var db =require('../database/index')

var getALL=function(req,res){
    db.query("SELECT * FROM products ",(err,result)=>{
        console.log(result);
    err?res.status(500).send(err):res.status(200).send(result)
    })
 
}

module.exports={getALL}