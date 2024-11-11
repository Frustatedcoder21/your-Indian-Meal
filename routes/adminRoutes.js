const express=require('express');
const router=express.Router();
const adminController=require('../controller/adminController')
const isloggedin=require('../middleware/isloggedin');
const dotenv=require('dotenv').config();

// router.get('/signup',(req,res)=>{
//     res.render('signup')
// })
// router.post('/signup',adminController.signup)
router.get('/login',(req,res)=>{
    res.render('admin-login')
})
router.post('/login',adminController.login)
router.get('/create',isloggedin,(req,res)=>{
    res.render('recipe-register')
})
router.get('/recipe-list', adminController.recipelist)
router.post('/create',adminController.create)
router.get('/logout',adminController.logout)
module.exports=router;