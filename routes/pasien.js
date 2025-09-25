const UserController = require('../controller/UserController')
const router = require('express').Router()

// halaman home pasien
router.get('/', UserController.home)

// 2. tampilkan profil pasien
router.get('/:pasienId', UserController.showPasien)

// 3. simpan data pasien
router.post('/:pasienId', UserController.updatePasien)

// 4. pasien bisa meminta checkup
router.get('/:pasienId/checkup', UserController.showCheckUpForm)
router.post('/:pasienId/checkup', UserController.createCheckUp)

// 5. hasil checkup + prescription
router.get('/:pasienId/checkup/prescription', UserController.showPrescription)


module.exports = router
