const userSchema = require('../models/users');
const moment = require("moment");
const newsSchema = require('../models/news');

async function RenderProfile(req, res) {
    const id = req.cookies.id
    if(!id) return res.redirect('/');
    const user = await userSchema.findById(id)   
    const date = moment(user.birthday).utc().format("YYYY-MM-DD")
    const newDate =  Date(date)
    return res.status(200).render('../views/user/profile',{
        user: user,
        birthday:date
    });
   
}

async function RenderPublication(req, res) {
    const id = req.cookies.id
    if(!id) return res.redirect('/');
    const user = await userSchema.findById(id)  
    const news = await newsSchema.find({user:id});
    console.log(news)
    return res.status(200).render('../views/user/publication',{
        user: user,
        news
    });
}

module.exports = { RenderProfile, RenderPublication }