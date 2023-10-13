import { Joi, validate } from "express-validation"

const profileUpdateValidation = {
    body: Joi.object({
        name: Joi.string().optional(),
        address: Joi.string().optional(),
        contactNo: Joi.string().optional(),
        image: Joi.string().optional()
    })
}

export const verifyProfileUpdate = validate(profileUpdateValidation,{},{})