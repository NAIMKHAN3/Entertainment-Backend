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
exports.getRating = exports.createRating = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
const createRating = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.user;
        req.body.userId = id;
        const result = yield prisma_1.default.cenemaRating.create({ data: req.body });
        res.status(201).send({
            success: true,
            statusCode: 201,
            message: 'Create Rating Successfully',
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createRating = createRating;
const getRating = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.cenemaRating.findMany({
            include: {
                user: true,
                cenema: true
            }
        });
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: 'Get Rating Successfully',
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getRating = getRating;
