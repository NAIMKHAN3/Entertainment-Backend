"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyCategory = void 0;
const express_validation_1 = require("express-validation");
const categoryValidation = {
    body: express_validation_1.Joi.object({
        name: express_validation_1.Joi.string().required(),
    })
};
exports.verifyCategory = (0, express_validation_1.validate)(categoryValidation, {}, {});
