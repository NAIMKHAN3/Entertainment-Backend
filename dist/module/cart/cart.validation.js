"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyCart = void 0;
const express_validation_1 = require("express-validation");
const cartValidation = {
    body: express_validation_1.Joi.object({
        cenemaId: express_validation_1.Joi.string().required()
    })
};
exports.verifyCart = (0, express_validation_1.validate)(cartValidation, {}, {});
