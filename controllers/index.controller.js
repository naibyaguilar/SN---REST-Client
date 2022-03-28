const NewsSchema = require('../models/news');
const userSchema = require('../models/users');

async function RenderIndex(req, res){
    const news = await NewsSchema.find().populate('user');
    const id = req.cookies.id
    const user = await userSchema.findById(id)
    
    res.status(200).render("../views/index", {
        news:news,
        user: user
    });
}



module.exports = { RenderIndex }