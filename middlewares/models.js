const Joi = require('joi')
module.exports = {
    modelLogin : Joi.object().keys({
        user: Joi.string().alphanum().min(6).max(16).required(),
        pass: Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/).min(6).required()
    }).with('user', 'pass'),


    modelReg : Joi.object().keys({
        user: Joi.string().alphanum().min(6).max(16).required(),
        pass: Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/).required(),
        mail: Joi.mail().required()
    }).with('user','pass','mail'),
}