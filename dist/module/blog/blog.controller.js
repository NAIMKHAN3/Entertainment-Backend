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
exports.deleteBlog = exports.updateBlog = exports.getBlogById = exports.getBlog = exports.createBlog = void 0;
const prisma_1 = __importDefault(require("../../utils/prisma"));
const createBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.blog.create({ data: req.body });
        res.status(201).send({
            success: true,
            statusCode: 201,
            message: 'Create Blog Successfully',
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createBlog = createBlog;
const getBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.blog.findMany();
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: 'Get Blog Successfully',
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getBlog = getBlog;
const getBlogById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield prisma_1.default.blog.findFirst({ where: { id } });
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: 'Get Blog Successfully',
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getBlogById = getBlogById;
const updateBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield prisma_1.default.blog.update({
            where: {
                id
            },
            data: req.body
        });
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: 'Update blog Successfully',
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateBlog = updateBlog;
const deleteBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield prisma_1.default.blog.delete({
            where: {
                id
            }
        });
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: 'Delete blog Successfully',
            data: result
        });
    }
    catch (err) {
    }
});
exports.deleteBlog = deleteBlog;
