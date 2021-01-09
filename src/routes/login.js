const express = require('express')
const router = express.Router()

const loginController = require('../app/controllers/LoginController')

// loginController.index

router.use('/', loginController.index)

module.exports = router