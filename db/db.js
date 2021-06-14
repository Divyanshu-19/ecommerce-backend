const mongoose = require('mongoose');

function initializeDBConnection(){
    mongoose.connect(`mongodb+srv://guptadivyanshu2012:${process.env.DB_PASSWORD}@cluster0.z3bzt.mongodb.net/ecommerceAPI?retryWrites=true&w=majority`, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => {console.log("successfully connected")})
    .catch(error => console.error("mongoose connection failed", error))
}

module.exports = initializeDBConnection;