"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyBooking = void 0;
const express_validation_1 = require("express-validation");
const bookingValidation = {
    body: express_validation_1.Joi.object({
        cenemaId: express_validation_1.Joi.string().required(),
        slot: express_validation_1.Joi.string().required(),
        bookingDate: express_validation_1.Joi.string().required(),
        person: express_validation_1.Joi.string().required(),
    })
};
exports.verifyBooking = (0, express_validation_1.validate)(bookingValidation, {}, {});
