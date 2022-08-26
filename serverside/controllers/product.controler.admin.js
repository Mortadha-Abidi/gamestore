var db =require('../database/index')
const bcrypt = require("bcrypt")
const saltRounds=10
////get admin /// 
var getadmin=function(req,res){
    db.query(`SELECT * FROM admindash `,(err,result)=>{
    err?res.status(500).send(err):res.status(200).send(result)
    })
 
}
////////// get all products /////////
var getAllProducts=function(req,res){
    db.query(`SELECT * FROM products `,(err,result)=>{
    err?res.status(500).send(err):res.status(200).send(result)
    })
 
}
//////// get all users //////// 
var getAllUsers=function(req,res){
    db.query(`SELECT * FROM user `,(err,result)=>{
    err?res.status(500).send(err):res.status(200).send(result)
    })
 
}
///////////// sigup admindash board /////:
var register=function(req,res){
        const firstname=req.body.firstname
        const lastname=req.body.lastname
        const password=req.body.password
        const email=req.body.email
        const picture=req.body.picture
        bcrypt.hash(password,saltRounds,(err,hash)=>{
            if(err){
                console.log(err);
            }
            db.query(
                `INSERT INTO admindash (firstname,lastname,email,password,picture) values (?,?,?,?,?)`,
                [firstname,lastname,email,hash,picture],
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
                    // console.log(password, result[0].password);
                  if (response) {
                    console.log(response,"ana res");
                    
                    req.session.user = result;
                    console.log("ffdsqs",req.session.user);
                     
                    res.send({result:result,response:response});
                   
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
////// update //// 
var Update=function(req,res){
    var params=[req.body.title,req.body.description,req.body.price,req.body.stock,req.body.picture]
    var body=`UPDATE products SET title=? ,description=?, price=?, stock=? ,picture=? WHERE product_id=1`
    db.query(body,params,(err,data)=>{
        if(err){
            console.log(err)
        }else{
            console.log("update done")
            res.send(data)
        }
    })
}
var addProduct=function(req,res){
    var params=[req.body.title,req.body.description,req.body.price,req.body.stock,req.body.picture]
    console.log(params);
    var str="INSERT INTO products (title ,description , price  ,stock,picture ) VALUES (?,?,?,?,?)"
    db.query(str,params,(err,result)=>{
        if(err){
            throw(err)
        }else{
            res.send("post submitted")
        }
    })
    }
// var logout=function(req,res){
//     req.session.destroy(function(err){
//         if(!err){
//             res.redirect('/')
//         }
//     })
// }

module.exports={getAllProducts,register,loging,sessions,getAllUsers,getadmin,Update,addProduct}