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

NewsSchema.methods.formatDate =function(date){
    const newDate = new Date(this[date]);
    let formattedDate = `${ `0${ newDate.getDate() }`.slice(-2) }-`;        // for double digit day    
        formattedDate += `${ `0${ newDate.getMonth() + 1 }`.slice(-2) }-`;  // for double digit month
        formattedDate += `${ newDate.getFullYear() }`;
        
    return formattedDate;
}

module.exports = mongoose.model('news', NewsSchema);