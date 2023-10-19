"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCinema = exports.getCinemaById = exports.updateCenema = exports.getCenema = exports.createCenema = void 0;
const prisma_1 = __importDefault(require("../../utils/prisma"));
const createCenema = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const result = yield prisma_1.default.cenema.create({ data: req.body });
        res.status(201).send({
            success: true,
            statusCode: 201,
            message: 'Create Cenema Successfully',
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createCenema = createCenema;
const getCenema = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.cenema.findMany({ include: { category: true } });
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: 'Get Cenema Successfully',
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getCenema = getCenema;
const updateCenema = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield prisma_1.default.cenema.update({
            where: {
                id
            },
            data: req.body
        });
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: 'Update cenema Successfully',
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateCenema = updateCenema;
const getCinemaById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield prisma_1.default.cenema.findFirst({
            where: {
                id
            },
            include: {
                category: true,
                rating: true
            }
        });
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: 'Get cenema by id Successfully',
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getCinemaById = getCinemaById;
const deleteCinema = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleteCart = yield prisma_1.default.cart.deleteMany({ where: { cenemaId: id } });
        const deleteBooking = yield prisma_1.default.booking.deleteMany({ where: { cenemaId: id } });
        const deleteRating = yield prisma_1.default.cenemaRating.deleteMany({ where: { cenemaId: id } });
        const result = yield prisma_1.default.cenema.delete({
            where: {
                id
            }
        });
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: 'Delete cenema Successfully',
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteCinema = deleteCinema;
