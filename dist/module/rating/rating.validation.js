"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRating = void 0;
const express_validation_1 = require("express-validation");
const ratingValidation = {
    body: express_validation_1.Joi.object({
        cenemaId: express_validation_1.Joi.string().required(),
        rating: express_validation_1.Joi.string().required(),
        comment: express_validation_1.Joi.string().required(),
    })
};
exports.verifyRating = (0, express_validation_1.validate)(ratingValidation, {}, {});
