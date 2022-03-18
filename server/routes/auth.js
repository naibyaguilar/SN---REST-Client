
const router = require("express").Router()
const handler = require("../handlers")



router.get("/login", handler.renderLogin)

router.get("/login", handler.login)

router.get("/register", handler.renderRegister)

router.get("/password", handler.renderPassword)


module.exports = router