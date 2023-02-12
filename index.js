const express = require('express');
const mongoose = require('mongoose');
const router = require('./router/router');
require('dotenv').config();

const MONGO_CONNECTION_URI = process.env.MONGO_ENDPOINT;
const app = express();
app.use(express.json());
app.use('/movieCrawler', router.router);

mongoose.set('strictQuery', false);
mongoose.connect(MONGO_CONNECTION_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    app.listen(4000, () => console.log("Server Listening on 4000"));
})
.catch(error => {
    console.log(error);
});
