const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

const User = require('../modals/User');
require('dotenv/config');

const JWT_SECRET = process.env.secret;

router.get('/', async (req, res) =>{
    const userList = await User.find().select('-password');

    if(!userList) {
        res.status(500).json({success:false})
    }
    res.send(userList);
})

router.get ('/:id', async (req, res) => {
    const user = await User.findById(req.params.id).select('-password');

    if (!user) {
        res.status(500).json({ success: false, message: 'The user with the given ID not exists' })
    }
    res.status(200).send(user)
    
})

router.post('/register', async (req, res) => {
    let user = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    })

    user = await user.save();

    if (!user)
        return res.status(404).send('User cannot be created')

     // Generate JWT token for the registered user
     const token = jwt.sign({ username: user.email }, JWT_SECRET, { expiresIn: '1d' });

     res.status(201).json({ user: user.id, token });
    // res.send(user);
})

router.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id).then(user => {
        if (user) {
            return res.status(200).json({ success: true, message: 'User deleted successfully' })
        } else {
            return res.status(404).json({ success: false, message: 'User cannot find' })
        }
    }).catch(err => {
        return res.status(400).json({ success: false, error: err })
    })
})

router.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email})
    const secret = process.env.secret;

    if(!user) {
        return res.status(400).send('User with given Email not found');
    }

    if(user && bcrypt.compareSync(req.body.password, user.password)) {
        const token = jwt.sign({
            userID: user.id,
            isAdmin : user.isAdmin
        }, secret, {expiresIn : '1d'} )
        res.status(200).json({user: user.id, token: token});
    } else {
        res.status(400).send('Password is mismatch');
    }

    // return res.status(200).send(user);
})

router.get('/get/count', async (req, res) => {
    const userCount = await User.countDocuments((count) => count);
    if (!userCount) {
        res.status(500), json({ success: false })
    }
    res.status(200).send({
        userCount: userCount
    });
})

module.exports = router;