const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    mail: {
        type: String,
        required: true
    },
    station: {
        type: Number,
        required: true
    },
    bus: {
        type: Number,
        required: true
    },
    hour: {
        type: Number,
        required: false
    },
    minute: {
        type: Number,
        required: false
    },
    second: {
        type: Number,
        required: false
    }
});

module.exports = mongoose.model('schedules', scheduleSchema);