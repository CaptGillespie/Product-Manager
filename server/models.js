const mongoose = require("mongoose");
// mongoose.connect('mongodb://localhost/PetsDB');

constReviewSchema = new mongoose.Schema({
    yourname:{type:String, minlength:[3, "Don't be shy, leave your name!"]}, 
    stars:{type:Number, default: 1},
    comment: {type: String, minlength: [3, "Get your internet bravado on"]}
})
const RestaurantSchema = new mongoose.Schema({
    name: {type: String, unique: true, minlength: 3, required: [true, "*What's the Name of the Restaurant?"]},
    type: {type: String, minlength: 3, required: [true, "*What sort of food?"]},
    description: {type: String, minlength: 3, required: [true, "*Describe it!"]},
    reviews:[reviewSchema]
},
{timestamps:true}
)


const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = Restaurant;


