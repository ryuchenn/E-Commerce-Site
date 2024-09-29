
/**
 * User Auth - Router
 */

const express = require('express');
const passport = require('passport'); // Login
const jwt = require('jsonwebtoken');
const router = express.Router();
const { registerUser } = require('../controllers/core/auth_con');
const verifyToken = require('../middleware/core/verifyToken');

/////////////////// Setting API (Register, Login, Logout .....)  Router Start ///////////////////

// Register
router.post('/register', registerUser);

// Login
router.post('/login', (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
        if (err || !user) {
            return res.status(500).json({
                message: 'Failed to login',
                user: user,
            });
        }
        const token = jwt.sign({ id: user.uid, username: user.username }, process.env.Session_SecretKey, {
            expiresIn: '1h',
        });

        return res.json({ status: 200, token: token });
    })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err)
            return res.status(500).json({ message: 'Error log out' });
        req.session.destroy((err) => {
            if (err)
                return res.status(500).json({ message: 'Error destroying session' });
            res.clearCookie('connect.sid');
            res.clearCookie('token');
            res.status(200).json({status: 200, message: 'Logout successful' });
        });
    });
});


///////// Admin, Superuser Start ////

router.get('/superuser', verifyToken, (req, res) => {
    res.json({ message: 'This is protected data.', user: req.user });
});


///////// Admin, Superuser End ////

/////////////////// Setting API (Register, Login, Logout .....)  Router End ///////////////////

module.exports = router;







