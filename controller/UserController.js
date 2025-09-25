const {User} = require("../models")
class UserController{

    static async home(req,res){
        console.log("home");
        
        try {
            res.render('home')
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }
    static async loginForm(req,res){
        console.log("loginF");

        try {
          res.render('login-form')   
        } catch (error) {
            res.send(error)
        }
    }

    static async postLogin(req,res){
        console.log("[postLogin]");

        try {
            
        } catch (error) {
            res.send(error)
        }
    }

    static async registerForm(req,res){
        console.log("register");

        try {
            // console.log('test');
            // let data = await User.findAll()
            // res.send(data)
          res.render('register-form')   
        } catch (error) {
            // console.log(error);
            res.send(error)
        }
    }

    static async postRegister(req,res){
        console.log("post Register");

        const {username, password, role} = req.body
        User.create({username, password, role})
        .then(newUser =>{
            res.redirect('/login')
        })
    }
}

module.exports = UserController