const express = require('express')
const AuthController = require('../controllers/AuthController')

const router = express.Router()

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
// ?
router.post('/reset-password', AuthController.resetPassword)

module.exports = router
