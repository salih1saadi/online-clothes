const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');
const Category = require('../../models/Category');



router.all('/*', (req, res, next)=>{

req.app.locals.layout = 'admin';
next();

});













module.exports = router;