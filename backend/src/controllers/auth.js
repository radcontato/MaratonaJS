const express = require('express');
const bcrypt = require('bcrypt');

const { Account } = require('../models');

const router = express.Router();

const saltRounds = 10;

router.get('/sign-in', (req, res) => {
    return res.json('Sign in')
});

router.get('/sign-up', async (req, res) => {

    const email = 'roberto@albano.com';
    const password = '123456';

    const hash = bcrypt.hashSync(password, saltRounds);

    const result = await Account.create({ email, password: hash });

    console.log(result);

    return res.json(result);
});

module.exports = router;