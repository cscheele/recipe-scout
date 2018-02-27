var mongoose = require('mongoose');

var RecipeSchema = new mongoose.Schema({
    title: String,
    ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }],
    image: Buffer,
    link: String
});

mongoose.model('Recipe', RecipeSchema);