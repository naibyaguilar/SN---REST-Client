const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var NewsSchema = new Schema({
    title:String,
    body:String,
    img:String,
    autor:String,
    date: { type:Date, default: Date.now()}
});

module.exports = mongoose.model('news', NewsSchema);