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
exports.deleteCart = exports.getCart = exports.createCart = void 0;
const prisma_1 = __importDefault(require("../../utils/prisma"));
const createCart = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.user;
        req.body.userId = id;
        const findUsedCart = yield prisma_1.default.cart.findFirst({
            where: req.body
        });
        if (findUsedCart) {
            res.status(400).send({
                success: false,
                message: "Already Added This Cinema"
            });
        }
        else {
            const result = yield prisma_1.default.cart.create({ data: req.body });
            res.status(200).send({
                success: true,
                message: "Add to cart successfull"
            });
        }
    }
    catch (err) {
        next(err);
    }
});
exports.createCart = createCart;
const getCart = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.user;
        const result = yield prisma_1.default.cart.findMany({
            where: {
                userId: id
            },
            include: {
                user: true,
                cenema: true
            }
        });
        res.status(200).send({
            success: true,
            message: "Get User cart successfull",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getCart = getCart;
const deleteCart = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield prisma_1.default.cart.delete({
            where: {
                id
            }
        });
        res.status(200).send({
            success: true,
            message: "Cart Deleted successfull",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteCart = deleteCart;
