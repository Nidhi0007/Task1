"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Joi = require('joi');
const userSchema = {
    body: Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().min(7).alphanum().required()
    })
};
exports.default = {
    userSchema
};
