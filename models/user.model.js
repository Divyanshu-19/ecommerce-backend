const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = Schema({
    username: String,
    emailId: {type: String, requred: [true, "please enter emailId"], unique: true},
    password: {type: String, requred: [true, "please enter password"], unique: true}
},{timestamps: true});

const User = mongoose.model("User", UserSchema);
module.exports = User;