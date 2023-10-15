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
exports.deleteFaq = exports.getFaq = exports.updateFaq = exports.createFaq = void 0;
const prisma_1 = __importDefault(require("../../utils/prisma"));
const createFaq = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.fAQ.create({ data: req.body });
        res.status(201).send({
            success: true,
            statusCode: 201,
            message: "FAQ Added Successs",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createFaq = createFaq;
const updateFaq = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield prisma_1.default.fAQ.update({
            where: {
                id
            },
            data: req.body
        });
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "FAQ Update Successs",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateFaq = updateFaq;
const getFaq = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.fAQ.findMany();
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "FAQ Get Successs",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getFaq = getFaq;
const deleteFaq = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield prisma_1.default.fAQ.delete({
            where: {
                id
            }
        });
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "FAQ Delete Successs",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteFaq = deleteFaq;
