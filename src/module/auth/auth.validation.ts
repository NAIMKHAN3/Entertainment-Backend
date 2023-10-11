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

const userLoginValidation = {
    body: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })
}

export const verifyUserLogin = validate(userLoginValidation,{},{})

const changePasswordValidation = {
    body: Joi.object({
        oldPassword: Joi.string().required(),
        newPassword: Joi.string().required(),
        confirmPassword: Joi.any()
        .equal(Joi.ref("newPassword"))
        .required()
        .label("Confirm password")
        .options({ messages: { "any.only": "{{#label}} does not match" } }),
    })
}

export const verifyChangePassword = validate(changePasswordValidation,{},{})