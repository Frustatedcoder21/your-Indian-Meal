const express=require('express');
const router=express.Router();
const apiController=require('../controller/apiController')

router.get('/recipe',apiController.recipeSearch);
router.get('/recipes', apiController.getAllRecipes);


module.exports=router;