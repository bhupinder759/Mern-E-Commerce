const express = require('express');
const { registerUser, loginUser, logoutUser, authMiddleware } = require('../../controllers/auth/authController');

const router = express.Router();

console.log('authRoute');
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

router.get('/check-auth', authMiddleware, (req, res) => {
    const user = req.user;
    res.status(200).json({
        success: true,
        user,
    });
})

module.exports = router;