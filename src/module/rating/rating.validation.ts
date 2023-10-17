import { Joi, validate } from "express-validation";

const ratingValidation = {
    body: Joi.object({
        cenemaId: Joi.string().required(),
        rating: Joi.string().required(),
        comment: Joi.string().required(),
    })
}

export const verifyRating = validate(ratingValidation,{},{})