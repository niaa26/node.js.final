const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;

const { updatePassword } = require('../controllers/authController');
const protect = require('../middleware/authMiddleware');

router.put('/update-password', protect, updatePassword);
