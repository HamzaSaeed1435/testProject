const express = require('express')
const User = require('../models/user')
const Auth = require('../middleware/auth')

const router = new express.Router()

//signup
router.post('/users', async (req, res) => {
    const user =await new User(req.body)

    try {
     await user.save()
        const token = await user.generateAuthToken()
        res.status(201).json({user, token})
    } catch (error) {
        res.status(400).json(error)
    }

})

//login

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.status(200).json({ user, token})
    } catch (error) {
        res.status(400).json(error)
    }
})

//logout
router.post('/users/logout', Auth, async (req, res) => {
    try {
       req.user.tokens =  req.user.tokens.filter((token) => {
            return token.token !== req.token 
        })
        await req.user.save()
        res.json('Logout successful')
    } catch (error) {
        res.status(500).json('Error logging out')
    }
})

//Logout All 
router.post('/users/logoutAll', Auth, async(req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.json('Logout All successful')
    } catch (error) {
        res.status(500).json('Error logging out')        
    }
})
module.exports = router