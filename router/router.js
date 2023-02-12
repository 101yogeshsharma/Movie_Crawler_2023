const postController = require('../controller/post');
const getController = require('../controller/get');
const express = require('express');


const router = express.Router();

router.post('/login', async (request, response) => postController.login(request, response));
router.post('/signup', async (request, response) => postController.signup(request, response));
router.get('/listusers', async (request, response) => getController.listUsers(request, response));

module.exports = {
    router
}