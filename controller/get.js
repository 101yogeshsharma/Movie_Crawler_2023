const userModel = require('../models/userModel');

const listUsers = async (request, response) => {
    try {
        let data = await userModel.find({});
        response.status(200).send({
            data
        });
    } catch (error) {
        console.log(error);
        response.status(500).send({
            message: "Something Went Wrong!",
            status: 'error'
        })
    }
}

module.exports = {
    listUsers
}