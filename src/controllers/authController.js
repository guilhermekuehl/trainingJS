const express = require('express')

const User = require('..models/User')

const router = express.Router()

router.post('/register', async (req, res)=>{
    try{
        const User = await User.create(req.body)

        return res.send({ User })
    }   catch(err){
        return send.status(400).send({ error: 'Registration failed' })
    }
})

module.exports = app => app.use('/auth', router)