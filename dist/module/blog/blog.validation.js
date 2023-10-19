"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyBlogUpdate = exports.verifyBlog = void 0;
const express_validation_1 = require("express-validation");
const blogValidation = {
    body: express_validation_1.Joi.object({
        title: express_validation_1.Joi.string().required(),
        description: express_validation_1.Joi.string().required(),
        image: express_validation_1.Joi.string().required(),
    })
};
exports.verifyBlog = (0, express_validation_1.validate)(blogValidation, {}, {});
const blogUpdateValidation = {
    body: express_validation_1.Joi.object({
        title: express_validation_1.Joi.string().optional(),
        description: express_validation_1.Joi.string().optional(),
        image: express_validation_1.Joi.string().optional(),
    })
};
exports.verifyBlogUpdate = (0, express_validation_1.validate)(blogUpdateValidation, {}, {});
