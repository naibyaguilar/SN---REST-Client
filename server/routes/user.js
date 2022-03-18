const router = require("express").Router()
const handler = require("../handlers")



router.get("/user", handler.renderUser)
router.get("/publication", handler.renderPublication)


module.exports = router