const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var NewsSchema = new Schema({
    title:String,
    body:String,
    img:String,
    ref:String,
    type:String,
    date: { type:Date, default: Date.now()},
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    status:String
  
});

module.exports = mongoose.model('news', NewsSchema);