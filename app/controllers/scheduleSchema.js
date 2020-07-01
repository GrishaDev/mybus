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
    },
    scheduleTrigger: {
        type: Number,
        required: false
    },
    times: {
        type: Number,
        require: false,
        default: 1
    },
    webPushSub: {
        type: Object,
        required: false
    }
});

scheduleSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
}); 

module.exports = mongoose.model(`schedules`, scheduleSchema);


// advanced: {
//     scheduleTrigger: {
//         type: Number,
//         required: false
//     },
//     long: {
//         type: Number,
//         required: false
//     },