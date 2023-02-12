const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        require: true,
        unique: [true, "Account already exist"]
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Account already exist"]
    },
    password: {
        type: String,
        required: true
    }
})
const userModel = mongoose.model("users", userSchema);
module.exports = userModel;