const recipemodel=require('../models/recipemodel');

const recipeSearch = async (req, res) => {
    const query = req.query.q; // Access the 'q' query parameter

    if (!query) {
        return res.status(400).json({ message: "Search query is required" });
    }

    try {
        // Sanitize and search for the recipe
        const sanitizedQuery = query.replace(/(^"|"$)/g, ''); // Remove leading and trailing quotes if any
        
        const searched_recipe = await recipemodel.find({
            name: { $regex: sanitizedQuery, $options: 'i' }  // Case-insensitive search
        });

        if (searched_recipe.length === 0) {
            return res.status(404).json({ message: "No recipes found" });
        }

        res.json(searched_recipe);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Something went wrong", error: err });
    }
};
const getAllRecipes = async (req, res) => {
    try {
        // Fetch all recipes from the database
        const allRecipes = await recipemodel.find();

        if (allRecipes.length === 0) {
            return res.status(404).json({ message: "No recipes found" });
        }

        // Send all recipes as a response
        res.json(allRecipes);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Something went wrong", error: err });
    }
};



module.exports={recipeSearch,getAllRecipes}