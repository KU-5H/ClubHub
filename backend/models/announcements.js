const mongoose = require('mongoose');
const {Schema} = mongoose;

const announceSchema = new Schema({
    title: String,
    text: String  
})

const announceModel = mongoose.model('Announcement', announceSchema)
module.exports = announceModel