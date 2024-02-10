const express = require('express')
const userModel = require('../models/User')

const app = express()

// localhost:3000/users
app.post('/users', async (req, res) => {

    try {
        console.log(req.body);
        const user = new userModel(req.body);

        await user.save();

        res.send(user);
    } catch (error) {
        console.error('Error saving user:', error);

        if (error.name === 'ValidationError') {
            res.status(400).send({ error: 'Validation failed', details: error.errors });
        } else {
            res.status(500).send('Error saving user');
        }
    }

})

module.exports = app