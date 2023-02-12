
const jsonWebToken = require('jsonwebtoken');
const userModel = require('../models/userModel');

const login = async (request, response) => {
    try {
        let data = await userModel.findOne({ email: request.body.email });
        if (data) {
            if (request.body.password === data.password) {
                let token = await jsonWebToken.sign({ _id: data._id }, 'thisismy#secret', {
                    expiresIn: '60'
                })
                response.status(200).send({
                    message: "Profile Created.",
                    status: "success",
                    token,
                    data
                });
            } else {
                response.status(400).send({
                    message: "Incorrect email or password",
                    status: 'error'
                })
            }
        }
        else {
            response.status(400).send({
                message: "Incorrect email or password",
                status: 'error'
            })
        }
    } catch (error) {
        console.log(error);
        response.status(500).send({
            message: "Something Went Wrong!",
            status: 'error'
        })
    }
}

const signup = async (request, response) => {
    const email = request.body.email;
    console.log(email);
    console.log(request.body.password);
    const newUser = new userModel(request.body);
    newUser.save(async function (err, data) {
        if (err) {
            console.error('Failed to Create User Profile');
            console.error(err);
            response.status(500).send({
                message: "Failed to Create User Profile",
                status: 'error'
            });
        } else {
            console.log(data);
            let token = await jsonWebToken.sign({ _id: userDetails._id }, 'thisismy#secret', {
                expiresIn: '60'
            })
            response.status(200).send({
                message: "Profile Created.",
                status: "success",
                token,
                data
            });
        }
    })
}

module.exports = {
    login,
    signup
}