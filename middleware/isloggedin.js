const cookieParser=require('cookie-parser');
const express=require('express');
const app=express();
const jwt=require('jsonwebtoken');

app.use(cookieParser());


function isloggedin(req,res,next){

    
    if(req.cookies.token==="") res.redirect("/admin/login");
    else{
       let data= jwt.verify(req.cookies.token,process.env.PASSWORD);
       req.user=data;
       next();
    }
}

module.exports=isloggedin;




