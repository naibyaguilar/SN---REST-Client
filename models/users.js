const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UsersSchema = new Schema({
    fullName:String,
    academyProfile:String,
    email:String,
    password:String,
    answer:String,
    phone:String,
    birthday:Date,
    role:Number
});


module.exports = mongoose.model('user', UsersSchema);