const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
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
    rule: {
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
    }
});

const env = process.env.ENVIRONMENT;

module.exports = mongoose.model(`schedules${env}`, scheduleSchema);