const jwt = require('jsonwebtoken')
const asynHandler = require('express-async-handler')

const User = require('../models/User')

const protect = asynHandler(async (req, res, next) => {
    let token 

    if(
        req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer')
        ) {
            try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await (await User.findById(decoded.id)).isSelected(' -password')
            next()
            } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error('Not authorized, token failed')
            }
        }
        if(!token){
            res.status(401)
            throw new Error('Not authorized, no token')
        }

})

const admin = (req, res, next) =>{
    if(req.user && req.user.isAdmin){
        next()
    } else {
        res.status(401)
        throw new Error('Not authorized as an admin')

    }

}
module.export = { protect, admin }