"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyFaqUpdate = exports.verifyFaq = void 0;
const express_validation_1 = require("express-validation");
const faqValidation = {
    body: express_validation_1.Joi.object({
        ques: express_validation_1.Joi.string().required(),
        ans: express_validation_1.Joi.string().required(),
    })
};
exports.verifyFaq = (0, express_validation_1.validate)(faqValidation, {}, {});
const faqUpdateValidation = {
    body: express_validation_1.Joi.object({
        ques: express_validation_1.Joi.string().optional(),
        ans: express_validation_1.Joi.string().optional(),
    })
};
exports.verifyFaqUpdate = (0, express_validation_1.validate)(faqUpdateValidation, {}, {});
