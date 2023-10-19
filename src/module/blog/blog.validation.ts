import { Joi, validate } from "express-validation";

const blogValidation = {
    body: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        image: Joi.string().required(),
    })
}

export const verifyBlog = validate(blogValidation,{},{})

const blogUpdateValidation = {
    body: Joi.object({
        title: Joi.string().optional(),
        description: Joi.string().optional(),
        image: Joi.string().optional(),
    })
}

export const verifyBlogUpdate = validate(blogUpdateValidation,{},{})