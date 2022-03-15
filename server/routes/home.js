const router = require("express").Router()
const handdle = require("../handlers")


router.get("/", handdle.renderHome)
router.get("/new", handdle.renderNew)
router.get("/new/add", handdle.renderCreateNew)

module.exports = router
