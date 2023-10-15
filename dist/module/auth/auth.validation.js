"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyChangePassword = exports.verifyUserLogin = exports.verifyUserReg = void 0;
const express_validation_1 = require("express-validation");
const userRegisterValidation = {
    body: express_validation_1.Joi.object({
        name: express_validation_1.Joi.string().required(),
        email: express_validation_1.Joi.string().email().required(),
        password: express_validation_1.Joi.string().required(),
        address: express_validation_1.Joi.string().required(),
        contactNo: express_validation_1.Joi.string().required(),
    })
};
exports.verifyUserReg = (0, express_validation_1.validate)(userRegisterValidation, {}, {});
const userLoginValidation = {
    body: express_validation_1.Joi.object({
        email: express_validation_1.Joi.string().email().required(),
        password: express_validation_1.Joi.string().required()
    })
};
exports.verifyUserLogin = (0, express_validation_1.validate)(userLoginValidation, {}, {});
const changePasswordValidation = {
    body: express_validation_1.Joi.object({
        oldPassword: express_validation_1.Joi.string().required(),
        newPassword: express_validation_1.Joi.string().required(),
        confirmPassword: express_validation_1.Joi.any()
            .equal(express_validation_1.Joi.ref("newPassword"))
            .required()
            .label("Confirm password")
            .options({ messages: { "any.only": "{{#label}} does not match" } }),
    })
};
exports.verifyChangePassword = (0, express_validation_1.validate)(changePasswordValidation, {}, {});
