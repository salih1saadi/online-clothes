const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const uploadfile = require('express-fileupload');
const users = require('./routes/users');
const categories = require('./routes/admin/categories');
const admin = require('./routes/admin/index');
const products = require('./routes/admin/products');



const port = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}







const {mongoDbUrl} = require('./config/db');

mongoose.connect(mongoDbUrl,{useNewUrlParser: true},()=>{


	console.log('connected');
});




// Body parser middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(uploadfile());


// Use Routes

app.use('/users', users);
app.use('/admin', admin);
app.use('/admin/categories', categories);
app.use('/admin/products', products);







app.get('/',(req, res)=>{

res.send('it is working');


})







app.listen(port, (error)=>{
	if (error) throw error;

console.log(`app is run ${process.env.PORT}`);
})

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});



module.exports = app;