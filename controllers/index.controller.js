const NewsSchema = require('../models/news');

async function RenderIndex(req, res){
    const news = await NewsSchema.find();
    console.log(news);
    res.status(200).render("../views/index", {news});
}

async function RenderNew(req, res){
    res.status(200).render("../views/publication/show");
}

async function RenderCreateNew(req, res){
    res.status(200).render("../views/publication/create");
}

module.exports = { RenderIndex, RenderNew, RenderCreateNew }