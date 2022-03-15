
const router = require("express").Router()
const handdle = require("../handlers")



router.get("/login", handdle.renderLogin)

router.get("/login", handdle.login)

router.get("/register", handdle.renderRegister)


module.exports = router