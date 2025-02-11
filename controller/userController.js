const User = require('../models/userModel');

const signup = async function(req, res) {
    try {
        const { name, email, password, dob } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        const newUser = new User({
            name,
            email,
            password,
            dateOfBirth: new Date(dob),
        });

        await newUser.save();
        res.status(201).json({ msg: 'User created successfully', user: newUser });
        
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ msg: 'Server Error', error: error.message });
    }
}

module.exports = signup;