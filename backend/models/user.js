const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true    
    },
    password: String,
    role: String
})

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel