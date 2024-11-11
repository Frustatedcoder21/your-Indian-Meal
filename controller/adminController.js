const recipemodel=require('../models/recipemodel')
const adminmodel=require('../models/adminmodel')
const mongoose=require('mongoose')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');


// const signup=(req,res)=>{
//     let {fullname,email,password}=req.body;
//     bcrypt.genSalt(10, async function(err,salt){
//         bcrypt.hash(password,salt, async function(err,hash){
//          let user=   await adminmodel.create({
//                 fullname,
//                 email,
//                 password:hash
//             })
//             console.log(user);
            
//         })
//     })
//     let token=jwt.sign({fullname,email},'secret');
//     res.cookie('token',token);
    
//     res.redirect('/admin/login')

// }
// for creating recipe
const create=async(req,res)=>{
let {name,ingredients,steps}=req.body;
ingredients=ingredients.split('%');
steps=steps.split('%');

let createdRecipe=await recipemodel.create({
    name,
    ingredients,
    steps
})
res.send(createdRecipe);

}

const login=async(req,res)=>{
    let {email,password,fullname}=req.body;
    let user= await adminmodel.findOne({email});
    if(!user){
        res.json({message:"something went wrong"});
    }else{
        bcrypt.compare(password,user.password,function(err,result){
            if(result){
                let token=jwt.sign({fullname,email},process.env.PASSWORD);
                res.cookie('token',token);
                res.redirect('/admin/create');
            }
        })
    }
    
}
const logout=(req,res)=>{
    // let token=req.cookies.token;
    res.cookie("token","");
    res.redirect('/admin/login');

}
const recipelist=async(req,res)=>{
    const recipe=await recipemodel.find();
    res.json(recipe);
}


module.exports={create,login,logout,recipelist}