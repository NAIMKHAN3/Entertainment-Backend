import { Joi, validate } from "express-validation";

const vehicleValidation = {
    body: Joi.object({
        name: Joi.string().required()
    })
}

export const verifyVehicle = validate(vehicleValidation,{})