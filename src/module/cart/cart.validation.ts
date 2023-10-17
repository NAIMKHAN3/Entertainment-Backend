import { Joi, validate } from "express-validation";

const cartValidation = {
    body: Joi.object({
        cenemaId : Joi.string().required()
    })
}

export const verifyCart = validate(cartValidation,{},{})