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
exports.getRatings = exports.createRating = void 0;
const prisma_1 = __importDefault(require("../../utils/prisma"));
const createRating = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.user;
        req.body.userId = id;
        req.body.rating = parseFloat(req.body.rating);
        const result = yield prisma_1.default.cenemaRating.create({ data: req.body });
        res.status(200).send({
            success: true,
            message: "Rating Success"
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createRating = createRating;
const getRatings = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.cenemaRating.findMany({ include: {
                user: true,
                cenema: true
            }, take: 10 });
        res.status(200).send({
            success: true,
            message: "Get Rating Success",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getRatings = getRatings;
