var mongoose = require('mongoose');

var IngredientSchema = new mongoose.Schema({
    name: String,
    recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }],
    image: Buffer
});

mongoose.model('Ingredient', IngredientSchema);