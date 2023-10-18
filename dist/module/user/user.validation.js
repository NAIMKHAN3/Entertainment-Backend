"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyProfileUpdate = void 0;
const express_validation_1 = require("express-validation");
const profileUpdateValidation = {
    body: express_validation_1.Joi.object({
        name: express_validation_1.Joi.string().optional(),
        address: express_validation_1.Joi.string().optional(),
        contactNo: express_validation_1.Joi.string().optional(),
        profileImg: express_validation_1.Joi.string().optional()
    })
};
exports.verifyProfileUpdate = (0, express_validation_1.validate)(profileUpdateValidation, {}, {});
