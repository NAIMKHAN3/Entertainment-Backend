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
exports.getAllSuperAdmin = exports.getAllAdmin = exports.getAllUser = exports.createAdmin = void 0;
const prisma_1 = __importDefault(require("../../utils/prisma"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const createAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const isExistingUser = yield prisma_1.default.user.findFirst({ where: { email } });
        if (isExistingUser) {
            return res.status(400).send({
                success: false,
                statusCode: 400,
                message: "User Already Exist"
            });
        }
        req.body.password = yield bcrypt_1.default.hash(password, 12);
        req.body.role = 'Admin';
        const userInfo = yield prisma_1.default.user.create({
            data: req.body,
            select: {
                id: true,
                email: true,
                contactNo: true,
                address: true,
                role: true,
                profileImg: true
            }
        });
        res.status(201).send({
            success: true,
            statusCode: 201,
            message: 'Admin Created Successfully',
            data: userInfo,
        });
    }
    catch (err) {
    }
});
exports.createAdmin = createAdmin;
const getAllUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.user.findMany({
            where: {
                role: 'User'
            }
        });
        res.status(200).send({
            success: true,
            message: 'Get All User Success',
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllUser = getAllUser;
const getAllAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.user.findMany({
            where: {
                role: 'Admin'
            }
        });
        res.status(200).send({
            success: true,
            message: 'Get All Admin Success',
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllAdmin = getAllAdmin;
const getAllSuperAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.user.findMany({
            where: {
                role: 'SuperAdmin'
            }
        });
        res.status(200).send({
            success: true,
            message: 'Get All Super Admin Success',
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllSuperAdmin = getAllSuperAdmin;
