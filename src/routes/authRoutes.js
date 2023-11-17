const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController')

router.post('api/v1/auth/register', authController.register)

module.exports = router;