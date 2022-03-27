async function RenderIndex(req, res){
    if(req.cookies["id"]){
        res.status(200).render("../views/index");
    }else{
        res.status(200).render("../views/auth/login", {
            message: ''
        })
    }
}

async function RenderNew(req, res){
    res.status(200).render("../views/publication/show");
}

async function RenderCreateNew(req, res){
    res.status(200).render("../views/publication/create");
}

module.exports = { RenderIndex, RenderNew, RenderCreateNew }