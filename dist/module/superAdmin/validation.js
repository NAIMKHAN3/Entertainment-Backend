"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRole = void 0;
const express_validation_1 = require("express-validation");
const roleValidation = {
    body: express_validation_1.Joi.object({
        role: express_validation_1.Joi.string().required().valid('User', 'Admin', 'SuperAdmin')
    })
};
exports.verifyRole = (0, express_validation_1.validate)(roleValidation, {}, {});
