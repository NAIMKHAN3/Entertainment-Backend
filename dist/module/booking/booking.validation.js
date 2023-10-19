"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPaymentStatusUpdate = exports.verifyStatusUpdate = exports.verifyBookingUpdate = exports.verifyBooking = void 0;
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
const bookingUpdateValidation = {
    body: express_validation_1.Joi.object({
        slot: express_validation_1.Joi.string().optional(),
        bookingDate: express_validation_1.Joi.string().optional(),
        person: express_validation_1.Joi.string().optional(),
    })
};
exports.verifyBookingUpdate = (0, express_validation_1.validate)(bookingUpdateValidation, {}, {});
const bookingStatusUpdate = {
    query: express_validation_1.Joi.object({
        status: express_validation_1.Joi.string().required().valid('Accepted', 'Rejected')
    })
};
exports.verifyStatusUpdate = (0, express_validation_1.validate)(bookingStatusUpdate, {}, {});
const bookingPaymentStatusUpdate = {
    body: express_validation_1.Joi.object({
        paymentStatus: express_validation_1.Joi.boolean().required()
    })
};
exports.verifyPaymentStatusUpdate = (0, express_validation_1.validate)(bookingPaymentStatusUpdate, {}, {});
