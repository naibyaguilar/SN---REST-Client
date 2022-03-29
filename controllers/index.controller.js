const NewsSchema = require('../models/news');
const userSchema = require('../models/users');

async function RenderIndex(req, res){
    const news = await NewsSchema.find().populate('user').sort({date:-1});
    const id = req.cookies.id
    const user = await userSchema.findById(id)
    
    res.status(200).render("../views/index", {
        news:news,
        user: user
    });
}

async function RenderIndexBytype(req, res){
    const {type} = req.params
    
    const news = await NewsSchema.find({type: {$regex: type, $options: 'i'}}).populate('user').sort({date:-1});
   
    
    const id = req.cookies.id
    if(!id) return res.redirect('/login');
    const user = await userSchema.findById(id)
    
    res.status(200).render("../views/index", {
        news:news,
        user: user
    });
}
async function RenderIndexByTitle(req, res){
    const {title} = req.body
    
    const news = await NewsSchema.find({title: {$regex: title, $options: 'i'}}).populate('user').sort({date:-1});
   
    console.log(news)
    const id = req.cookies.id
    if(!id) return res.redirect('/login');
    const user = await userSchema.findById(id)
    
    res.status(200).render("../views/index", {
        news:news,
        user: user
    });
}



module.exports = { RenderIndex, RenderIndexBytype, RenderIndexByTitle }