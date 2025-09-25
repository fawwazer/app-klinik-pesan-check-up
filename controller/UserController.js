// const {User} = require("../models")
const { PasienProfile, CheckUp, CheckUpDisease, Disease, Prescription, Medicene } = require('../models')

class UserController{

    // static async home(req,res){
    //     console.log("home");
        
    //     try {
    //         res.render('home')
    //     } catch (error) {
    //         console.log(error);
    //         res.send(error)
    //     }
    // }
    // static async loginForm(req,res){
    //     console.log("loginF");

    //     try {
    //       res.render('login-form')   
    //     } catch (error) {
    //         res.send(error)
    //     }
    // }

    // static async postLogin(req,res){
    //     console.log("[postLogin]");

    //     try {
            
    //     } catch (error) {
    //         res.send(error)
    //     }
    // }

    // static async registerForm(req,res){
    //     console.log("register");

    //     try {
    //         // console.log('test');
    //         // let data = await User.findAll()
    //         // res.send(data)
    //       res.render('register-form')   
    //     } catch (error) {
    //         // console.log(error);
    //         res.send(error)
    //     }
    // }

    // static async postRegister(req,res){
    //     console.log("post Register");

    //     const {username, password, role} = req.body
    //     User.create({username, password, role})
    //     .then(newUser =>{
    //         res.redirect('/login')
    //     })
    // }

    // 1. home pasien
    static async home(req, res) {
        try {
            const pasien = await PasienProfile.findAll()
            res.render('home-pasien', { pasien })
        } catch (err) {
            res.send(err)
        }
    }

    // 2. tampil profil pasien
    static async showPasien(req, res) {
        try {
            const { pasienId } = req.params
            const pasien = await PasienProfile.findByPk(pasienId)
            res.render('pasien-profile', { pasien })
        } catch (err) {
            res.send(err)
        }
    }

    // 3. update/simpan data pasien
    static async updatePasien(req, res) {
        try {
            const { pasienId } = req.params
            const { fullName, no_telp, alamat } = req.body
            await PasienProfile.update({ fullName, no_telp, alamat }, { where: { id: pasienId } })
            res.redirect(`/pasien/${pasienId}`)
        } catch (err) {
            res.send(err)
        }
    }

    // 4. form checkup
    static async showCheckUpForm(req, res) {
        try {
            const { pasienId } = req.params
            res.render('pasien-checkupForm', { pasienId })
        } catch (err) {
            res.send(err)
        }
    }

    // 5. buat checkup
    static async createCheckUp(req, res) {
        try {
            const { pasienId } = req.params
            const { patientComplain, DiseaseId, symtomps, description } = req.body

            // simpan checkup
            const checkup = await CheckUp.create({
                PasienId: pasienId,
                DoctorId: 1, // sementara hardcode
                checkUpDate: new Date(),
                status: true,
                patientComplain
            })

            // simpan hasil penyakit
            await CheckUpDisease.create({
                symtomps,
                description,
                DiseaseId,
                CheckUpId: checkup.id
            })

            // buat prescription 1x
            await Prescription.create({
                CheckUpId: checkup.id,
                instruction: "Minum obat sesuai resep dokter"
            })

            res.redirect(`/pasien/${pasienId}/checkup/prescription`)
        } catch (err) {
            res.send(err)
        }
    }

    // 6. tampilkan prescription + obat
    static async showPrescription(req, res) {
        try {
            const { pasienId } = req.params
            const checkup = await CheckUp.findOne({
                where: { PasienId: pasienId },
                include: [
                    { 
                        model: CheckUpDisease,
                        include: [Disease]
                    },
                    {
                        model: Prescription,
                        include: [Medicene]
                    }
                ],
                order: [['createdAt', 'DESC']]
            })

            res.render('pasien-prescription', { checkup })
        } catch (err) {
            res.send(err)
        }
    }
}

module.exports = UserController