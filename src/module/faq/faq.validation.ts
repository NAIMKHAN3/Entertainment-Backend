import { Joi, validate } from "express-validation";

const faqValidation = {
    body: Joi.object({
        ques: Joi.string().required(),
        ans: Joi.string().required(),
    })
}

export const verifyFaq = validate(faqValidation,{},{})

const faqUpdateValidation = {
    body: Joi.object({
        ques: Joi.string().optional(),
        ans: Joi.string().optional(),
    })
}

export const verifyFaqUpdate = validate(faqUpdateValidation,{},{})