import { Joi, validate } from "express-validation";

const bookingValidation = {
    body: Joi.object({
        cenemaId: Joi.string().required(),
        slot: Joi.string().required(),
        bookingDate: Joi.string().required(),
        person: Joi.string().required(),
    })
}

export const verifyBooking = validate(bookingValidation,{},{})

const bookingUpdateValidation = {
    body: Joi.object({
        slot: Joi.string().optional(),
        bookingDate: Joi.string().optional(),
        person: Joi.string().optional(),
    })
}

export const verifyBookingUpdate = validate(bookingUpdateValidation,{},{})


const bookingStatusUpdate = {
    query: Joi.object({
        status: Joi.string().required().valid('Accepted', 'Rejected')
    })
}
export const verifyStatusUpdate = validate(bookingStatusUpdate,{},{})

const bookingPaymentStatusUpdate = {
    body: Joi.object({
        paymentStatus: Joi.boolean().required()
    })
}
export const verifyPaymentStatusUpdate = validate(bookingPaymentStatusUpdate,{},{})
