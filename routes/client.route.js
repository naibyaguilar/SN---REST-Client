var express = require('express');
var router = express.Router();

const IndexController = require('../controllers/index.controller');
const AuthController = require('../controllers/auth.controller');

/*#region Auth*/
router.get('/', IndexController.RenderIndex);
/*#endregion*/

/*#region Auth*/
router.get('/register', AuthController.RenderRegister);
router.post('/register', AuthController.Register);
router.get('/login', AuthController.RenderLogin);
router.post('/login', AuthController.Login);
/*#endregion*/

module.exports = router