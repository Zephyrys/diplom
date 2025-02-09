const express = require('express')
const UserController = require('../controllers/UserController')
const controller = new UserController()
const router = express.Router()
// ? GET
router.get('/', (req, res) => controller.getAll(req, res))
router.get('/:id', (req, res) => controller.getOne(req, res))

module.exports = router
