const express = require('express')

const router = express.Router()

//controllers
const { registerUser } = require('../controllers/userController')

//routes

router.route('/').post(registerUser)

module.exports= router 