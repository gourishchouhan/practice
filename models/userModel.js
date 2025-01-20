const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        match: [/^[a-zA-Z0-9] +$/, "Please enter a valid name"],
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,

        validate: {
            validator: validatePassword,
            message: "Password must contain one uppercase letter, one lowercase letter, one number, and one special character"
        }
    },
    dateOfBirth: {
        type: String,
        required: true,
        validate: {
            validator: validateAge,
            message: "User must be at least 18 years old"
        }
    },
});

function validatePassword(password) {
    return (
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[!@#$%^&*(){}<>?]/.test(password)
    )
}

function validateAge(dob) {
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear()
    return age >= 18;
}

module.exports = mongoose.model('User', userSchema);
