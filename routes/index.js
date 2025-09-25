const UserController = require('../controller/UserController')
const router = require('express').Router()
const routerPasien = require('./pasien')
console.log("masusk sini");

router.get('/', UserController.home)
// router.get('/register',UserController.registerForm)
// router.post('/register',UserController.postRegister)
// router.get('/login',UserController.loginForm)
// router.post('/login',UserController.postLogin)

router.use('/pasien', routerPasien)

module.exports = router
