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
exports.deleteCategory = exports.updateCategory = exports.getCategoryById = exports.getCategory = exports.createCategory = void 0;
const prisma_1 = __importDefault(require("../../utils/prisma"));
const createCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.cenemaCategory.create({ data: req.body });
        res.status(201).send({
            success: true,
            statusCode: 201,
            message: 'Create Category Successfully',
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createCategory = createCategory;
const getCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.cenemaCategory.findMany();
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: 'Get Category Successfully',
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getCategory = getCategory;
const getCategoryById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield prisma_1.default.cenemaCategory.findFirst({ where: { id } });
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: 'Get Category Successfully',
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getCategoryById = getCategoryById;
const updateCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield prisma_1.default.cenemaCategory.update({
            where: {
                id
            },
            data: req.body
        });
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: 'Update Category Successfully',
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateCategory = updateCategory;
const deleteCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield prisma_1.default.cenemaCategory.delete({
            where: {
                id
            }
        });
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: 'Delete Category Successfully',
            data: result
        });
    }
    catch (err) {
    }
});
exports.deleteCategory = deleteCategory;
