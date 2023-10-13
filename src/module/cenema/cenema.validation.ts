import { Joi, validate } from "express-validation";

const validationCenema = {
    body: Joi.object({
        name: Joi.string().required(),
        producerName: Joi.string().required(),
        productionManager: Joi.string().required(),
        image: Joi.string().required(),
        price: Joi.string().required(),
        description: Joi.string().required(),
        realeaseDate: Joi.string().required(),
        categoryId: Joi.string().required()
    })
}

export const verifyCenema = validate(validationCenema, {}, {})