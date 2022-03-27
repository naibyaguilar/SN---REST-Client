var express = require('express');
var router = express.Router();

const IndexController = require('../controllers/index.controller');
const AuthController = require('../controllers/auth.controller');
const AccountController = require('../controllers/account.controller');

/*#region Index*/
router.get('/', IndexController.RenderIndex);
/*#endregion*/

/*#region User*/
router.get("/user", AccountController.RenderProfile)
router.get("/publication", AccountController.RenderPublication)
/*#endregion*/

/*#region Auth*/
router.get('/register', AuthController.RenderRegister);
router.post('/register', AuthController.Register);
router.get('/login', AuthController.RenderLogin);
router.post('/login', AuthController.Login);
/*#endregion*/

router.get('/create', IndexController.RenderCreateNew);


module.exports = router