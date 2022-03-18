async function RenderIndex(req, res){
    res.status(200).render("../views/index");
}

async function RenderNew(req, res){
    res.status(200).render("../views/publication/show");
}

async function RenderCreateNew(req, res){
    res.status(200).render("../views/publication/create");
}

module.exports = { RenderIndex, RenderNew, RenderCreateNew }