const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()
const initializeDBConnection = require('./db/db');

//Routers
const productRouter = require('./router/productRouter');

//Models
const User = require('./models/user.model');

const { errorHandler } = require("./middleware/error-handler");
const { routeNotFound } =  require("./middleware/route-not-found");



const app = express();
initializeDBConnection();//Connect to database
// app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(cors());


app.use('/products', productRouter);

app.get('/',async (req, res) => {
  try{
    const response = User.find({}).then(data => res.json({success: true, data}));
  }catch(err){
    console.log(err);
  }
})

app.post('/', async (req, res) => {
  const {emailId, password} = req.body;
  try{
    const newUser = new User({emailId: emailId, password: password});
    newUser.save()
    .then(savedUser => res.json({success: true, data: savedUser}));
  }catch(err){
    console.log(err);
  }
})

app.use(routeNotFound);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    
    console.log("server started on Port:", PORT);
})