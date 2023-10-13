import { Joi, validate } from "express-validation";

const categoryValidation = {
    body: Joi.object({
        name: Joi.string().required(),
    })
}

export const verifyCategory = validate(categoryValidation,{},{})