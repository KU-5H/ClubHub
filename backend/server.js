const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')

const app = express();

//middleware
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({extended: false}))

app.use('/', require('./routes/learnRoutes'))




mongoose.connect(process.env.MONGOURL)
    .then(() => {
        app.listen(process.env.PORT, () => console.log(`Server is listening on port ${process.env.PORT}`));
    })