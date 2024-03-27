require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();

let tempV = "nahh hello"
app.get('/test', (req, res) => {
    res.json(tempV)
})

mongoose.connect(process.env.MONGOURL)
    .then(() => {
        app.listen(process.env.PORT, () => console.log("Server is listening..."));
    })