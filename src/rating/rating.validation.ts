import { Joi, validate } from "express-validation";

const ratingValidation = {
    body: Joi.object({
        cenemaId: Joi.string().required(),
        rating: Joi.number().required(),
        comment: Joi.string().required()
    })
}

export const verifyRating = validate(ratingValidation,{},{})