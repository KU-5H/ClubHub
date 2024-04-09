const mongoose = require('mongoose');
const {Schema} = mongoose;

const financeSchema = new Schema({
    email: String,
    paymentsMade: [Number],
    unpaidDebt: Number
})

const financeModel = mongoose.model('Finance', financeSchema)

module.exports = financeModel