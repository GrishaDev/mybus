const Joi = require('joi');
const { ServerError } = require('../helpers/utils/error');

const creationSchema = Joi.object({
    rule: Joi.object({
        hour: Joi.number().min(0).max(23).optional(),
        minute: Joi.number().min(0).max(59).optional(),
        second: Joi.number().min(0).max(59).optional(),
    }).required().min(1),
    name: Joi.string().min(1).max(12).required(),
    mail: Joi.string().email().required(),
    station: Joi.number().required(),
    bus: Joi.number().required(),
    scheduleTrigger: Joi.number().optional(),
    times: Joi.number().optional(),
    webPushSub: Joi.object().optional()
});

const updateSchema = Joi.object({
    rule: Joi.object({
        hour: Joi.number().min(0).max(23).optional(),
        minute: Joi.number().min(0).max(59).optional(),
        second: Joi.number().min(0).max(59).optional(),
    }).optional().min(1),
    name: Joi.string().min(1).max(12).optional(),
    mail: Joi.string().email().optional(),
    station: Joi.number().optional(),
    bus: Joi.number().optional(),
    scheduleTrigger: Joi.number().allow(null).optional(),
    times: Joi.number().allow(null).optional(),
    webPushSub: Joi.object().allow(false).optional()
});

const creationValidation = (req, res, next) => {
    const { error } = Joi.validate(req.body, creationSchema);
    if(error) {
        sendError(error);
    }
    next(); 
};

const updateValidation = (req, res, next) => {
    const { error } = Joi.validate(req.body, updateSchema);
    if(error) {
        sendError(error);
    }
    next(); 
};

const isMail = (req, res, next) => {
    const mailJoi = Joi.object({ mail: Joi.string().email().required() });
    const { error } = Joi.validate(req.body, mailJoi);
    if(error) {
        sendError(error);
    }
    next(); 
};

const sendError = (err) => {
    let msg = err.details[0].message;
    msg = msg.replace(/"/g, '');
    throw new ServerError(400, msg);
}

module.exports = { creationValidation, updateValidation, isMail }