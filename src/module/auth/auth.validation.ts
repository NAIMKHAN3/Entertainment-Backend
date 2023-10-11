import { Joi, validate } from "express-validation";

const userRegisterValidation = {
    body: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        address: Joi.string().required(),
        contactNo: Joi.string().required(),
    })
}

export const verifyUserReg = validate(userRegisterValidation,{},{})