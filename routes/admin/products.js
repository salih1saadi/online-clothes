const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const Product = require('../../models/Product');
const Category = require('../../models/Category');



const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, 'public')
  },
  filename: function(req, file, callback) {
    console.log(file)
    callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})


const upload = multer({ storage: storage }).single('file');

router.get('/', (req, res)=>{

	Product.find({})
	.populate('category')
	.then(products=>{

		res.send(products);

	});




});

router.get('/add', (req, res)=> res.send('/add'));

router.post('/add/upload', (req, res)=>{

upload(req, res, function (err) {
           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
      return res.status(200).send(req.file)

    })


let file = req.files.file;
let filename = file.name;




 

file.mv('/client/public/assets/' + filename, (err)=>{
 
 if(err) throw err;

});





});

router.post('/add', (req, res)=>{

	




    const newProduct = new Product();

    newProduct.name =req.body.name;
	newProduct.category =req.body.category;
    newProduct.file =req.body.file;
	newProduct.price =req.body.price;



 
 newProduct.save().then(savedCategory=>{

res.json('created');

 });




	


 });

router.post('/delete/:_id', (req, res)=>{
  console.log(req.params._id)

  Product.remove({_id:req.params._id})
  .then(result=>{
  
  res.send('deleted')
  
  });


});



module.exports = router;
