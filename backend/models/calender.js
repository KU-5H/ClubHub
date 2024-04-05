const mongoose = require('mongoose');
const {Schema} = mongoose;

const calenderSchema = new Schema({
    title: String,
    text: String,
    startDate: Date,
    endDate: Date,
})

const CalendarModel = mongoose.model('Calender', calenderSchema)

module.exports = CalendarModel