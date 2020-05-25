const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CategorySchema = new Schema({
  
title:{

 type: String,
 required: true


},
routeName:{
 type: String,
 required: true,
 default:0

},
items:[{
	type: Schema.Types.ObjectId,
    ref:'products'
}]

});


module.exports = Category = mongoose.model('categories', CategorySchema);