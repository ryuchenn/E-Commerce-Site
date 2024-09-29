/**
 * User registeration, 
 */

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { findUserByEmailOrUsername, createUser } = require('../../models/core/auth_md');

// register page
const registerUser = async (req, res, next) => {
    const { username, email, password, confirmPassword } = req.body;
    try {
        const existingUser = await findUserByEmailOrUsername(email, username);
        if (existingUser != null && existingUser.rows >1)
            return res.status(409).send('User with this email or username already exists');
        else{
            const hashedPassword = await bcrypt.hash(password, 10); // Password Encryption
            const newUser = await createUser(username, email, hashedPassword);

            // Give the token when user done their registeration
            const token = jwt.sign({ id: newUser.uid, username: newUser.username }, process.env.Session_SecretKey, {
                expiresIn: '1h',
            });
            return res.send({status:201, message:'User registered successfully', token: token});
        }
    } catch (error) {
        res.status(500).send('Server error, please try again later. ERROR: '+ error);
    }
};

module.exports = { registerUser };