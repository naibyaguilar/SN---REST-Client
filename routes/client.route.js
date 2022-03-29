var express = require('express');
var router = express.Router();

const IndexController = require('../controllers/index.controller');
const AuthController = require('../controllers/auth.controller');
const AccountController = require('../controllers/account.controller');
const NewsController = require('../controllers/news.controller');

/*#region Index*/
router.get('/', IndexController.RenderIndex);
router.get('/home/(:type)', IndexController.RenderIndexBytype);
router.post('/home', IndexController.RenderIndexByTitle);
/*#endregion*/

/*#region User*/
router.get("/user", AccountController.RenderProfile);
router.get("/publication", AccountController.RenderPublication);
router.get("/detail/(:id)", AccountController.RenderDetail);
/*#endregion*/

/*#region Auth*/
router.get('/register', AuthController.RenderRegister);
router.post('/register', AuthController.Register);
router.get('/login', AuthController.RenderLogin);
router.post('/login', AuthController.Login);
router.get('/recover', AuthController.RenderRecoverPassword);
router.post('/recover', AuthController.RecoverPassword);
router.get('/recover/(:id)', AuthController.RenderSetNewPassword);
router.post('/recover/set/(:id)', AuthController.SetNewPassword);
router.get('/logout', AuthController.Logout)

/*#endregion*/

/*#region News*/
router.get('/post', NewsController.RenderNewPost);
router.post('/post', NewsController.NewPost);
router.get('/post/(:id)', NewsController.GetPostById);
router.get('/post/delete/(:id)', NewsController.DeletePost);
/*#endregion*/



module.exports = router