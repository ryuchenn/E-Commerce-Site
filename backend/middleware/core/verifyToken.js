/**
 * Check the token. Let member/admin/superuser can access specific website like '/account'
 */

const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).json({status:401, message: 'Access denied, no token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.Session_SecretKey);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({status:400,  message: 'Invalid token.' });
    }
};

module.exports = verifyToken;
