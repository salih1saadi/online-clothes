const express = require('express');
const router = express.Router();
const Category = require('../../models/Category');



//get catgories
router.get('/', (req, res)=>{

	Category.find({}).populate('items')
	.then(categories=>{

		res.send(categories);

	});


});


router.get('/create', (req, res)=> res.send('/create'));
router.post('/create', (req, res)=>{

	const newCategory = new Category();



	newCategory.title =req.body.title;
	newCategory.routeName =req.body.routeName;
	newCategory.items = req.body.items;


 
 newCategory.save().then(savedCategory=>{

res.json('created');

 });
 });


module.exports = router;