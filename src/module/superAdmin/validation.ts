import { Joi, validate } from "express-validation";

const roleValidation = {
    body: Joi.object({
        role: Joi.string().required().valid('User', 'Admin', 'SuperAdmin')
    })
}

export const verifyRole = validate(roleValidation,{},{})