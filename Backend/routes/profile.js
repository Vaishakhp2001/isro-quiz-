const router = require('express').Router()
const { response } = require('express')
const { User,Admin } = require('../models/user')
const { validates } = require('../models/user')

router.get('/user/:id', async (req, res) => {
    try {
        console.log('id', req.params.id)
        const user = await User.findOne({ _id: req.params.id })
        console.log(user)
        res.json(user)
    }
    catch (error) {
        console.log(error)
    }
})

router.post('/user/edit/:id', async (req, res) => {
    try {
        console.log("post id", req.params.id)
        await User.updateOne({ _id: req.params.id }, {
            $set: { firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email }
        }).then((response) => {
            console.log(response)
            res.json(response)
        })
    }
    catch (error) {
        console.log(error)
    }
})

module.exports = router