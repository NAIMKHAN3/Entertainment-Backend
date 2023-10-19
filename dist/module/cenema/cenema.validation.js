"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyCenemaUpdate = exports.verifyCenema = void 0;
const express_validation_1 = require("express-validation");
const validationCenema = {
    body: express_validation_1.Joi.object({
        name: express_validation_1.Joi.string().required(),
        producerName: express_validation_1.Joi.string().required(),
        productionManager: express_validation_1.Joi.string().required(),
        image: express_validation_1.Joi.string().required(),
        price: express_validation_1.Joi.string().required(),
        description: express_validation_1.Joi.string().required(),
        realeaseDate: express_validation_1.Joi.string().required(),
        categoryId: express_validation_1.Joi.string().required()
    })
};
exports.verifyCenema = (0, express_validation_1.validate)(validationCenema, {}, {});
const validationCenemaUpdate = {
    body: express_validation_1.Joi.object({
        name: express_validation_1.Joi.string().optional(),
        producerName: express_validation_1.Joi.string().optional(),
        productionManager: express_validation_1.Joi.string().optional(),
        image: express_validation_1.Joi.string().optional(),
        price: express_validation_1.Joi.string().optional(),
        description: express_validation_1.Joi.string().optional(),
        realeaseDate: express_validation_1.Joi.string().optional(),
        categoryId: express_validation_1.Joi.string().optional()
    })
};
exports.verifyCenemaUpdate = (0, express_validation_1.validate)(validationCenemaUpdate, {}, {});
