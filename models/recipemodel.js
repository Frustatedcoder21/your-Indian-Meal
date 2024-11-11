const mongoose=require('mongoose');

const recipeSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    ingredients:{
        type:Array,
        required:true,
    },
    steps:{
        type:Array,
        required:true
    }
});
module.exports=mongoose.model('recipe',recipeSchema);