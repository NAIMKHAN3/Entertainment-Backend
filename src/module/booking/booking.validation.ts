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


const bookingStatusUpdate = {
    query: Joi.object({
        status: Joi.string().required().valid('Accepted', 'Rejected')
    })
}
export const verifyStatusUpdate = validate(bookingStatusUpdate,{},{})
