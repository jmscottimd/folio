const express = require('express')

const router = express.Router()

//controllers
const { registerUser, getAllUsers, loginUser } = require('../controllers/userController')

//routes

router.route('/').post(registerUser).get(getAllUsers)
router.post('/login', loginUser)

module.exports= router 