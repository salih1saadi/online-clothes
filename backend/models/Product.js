const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  

name:{

 type: String,
 required: true


},

file:{

 type: String
 


},
category:{

 type: Schema.Types.ObjectId,
 ref:'categories'
 


},

price:{

 type: Number,
 default: 0


}
});

module.exports = Product = mongoose.model('products', ProductSchema);