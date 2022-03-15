


exports.renderHome = async (req, res, next) => {
    res.render("../views/index")

}

exports.renderNew = async (req, res, next) => {
    res.render("../views/publication/show")
}

exports.renderCreateNew = async (req, res, next) => {
    res.render("../views/publication/create")

}