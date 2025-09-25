const UserController = require('../controller/UserController')
const router = require('express').Router()
console.log("masusk sini");

router.get('/',UserController.home)
router.get('/register',UserController.registerForm)
router.post('/register',UserController.postRegister)
router.get('/login',UserController.loginForm)
router.post('/login',UserController.postLogin)

module.exports = router
