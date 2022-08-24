var db =require('../database/index')
const bcrypt = require("bcrypt")
const saltRounds=10

var getALL=function(req,res){
    db.query(`SELECT * FROM products `,(err,result)=>{
    err?res.status(500).send(err):res.status(200).send(result)
    })
 
}
///////////// sigup admindash board /////:
var register=function(req,res){
        const firstname=req.body.firstname
        const lastname=req.body.lastname
        const password=req.body.password
        const email=req.body.email
        bcrypt.hash(password,saltRounds,(err,hash)=>{
            if(err){
                console.log(err);
            }
            db.query(
                `INSERT INTO admindash (firstname,lastname,email,password) values (?,?,?,?)`,
                [firstname,lastname,email,hash],
                (err,result)=>{
                    console.log(err,'eee');
                    console.log(result);
                }
                
                
            
            )
        })
    
}
//////// create session //////// 
var sessions=function(req,res){
    if(req.session.admindash){
        res.send({loggedIn:true ,admindash:req.session.admindash})
    }else{
        res.send({loggedIn:false})
    }
}
////////////////////////////: login admin dash board //////// 
var loging=function(req,res){
    const email=req.body.email;
    const password=req.body.password
    db.query(
        `SELECT * FROM admindash where email = ?`,
        email,
        
        (err,result)=>{
            if(err){
                res.send({err:err})
            }
            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                  if (response) {
                    req.session.user = result;
                    console.log(req.session.user);
                    res.send(result);
                  } else {
                    res.send({ message: "Wrong username/password combination!" });
                  }
                });
              } else {
                res.send({ message: "User doesn't exist" });
              }
            }
        
        
        
    )

}

module.exports={getALL,register,loging,sessions}