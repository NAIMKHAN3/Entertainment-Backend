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
exports.changePassword = exports.loginUser = exports.createUser = void 0;
const prisma_1 = __importDefault(require("../../utils/prisma"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const token_utils_1 = require("../../utils/token.utils");
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
        const userInfo = yield prisma_1.default.user.create({
            data: req.body,
            select: {
                id: true,
                name: true,
                email: true,
                contactNo: true,
                address: true,
                role: true,
                profileImg: true
            }
        });
        const accessToken = (0, token_utils_1.createToken)(userInfo, "ACCESS");
        const refreshToken = (0, token_utils_1.createToken)(userInfo, "REFRESH");
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            path: '/'
        });
        res.status(201).send({
            success: true,
            statusCode: 201,
            message: 'User Created Successfully',
            data: userInfo,
            accessToken
        });
    }
    catch (err) {
    }
});
exports.createUser = createUser;
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const findUser = yield prisma_1.default.user.findFirst({ where: { email } });
        if (!findUser) {
            return res.status(400).send({
                success: false,
                statusCode: 400,
                message: "User Not Found"
            });
        }
        const isPasswordCorrect = yield bcrypt_1.default.compare(password, findUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).send({
                success: false,
                statusCode: 400,
                message: "Password Incorrect"
            });
        }
        const userInfo = {
            id: findUser.id,
            name: findUser.name,
            email: findUser.email,
            address: findUser.address,
            contactNo: findUser.contactNo,
            role: findUser.role,
            profileImg: findUser.profileImg,
        };
        const accessToken = (0, token_utils_1.createToken)(userInfo, "ACCESS");
        const refreshToken = (0, token_utils_1.createToken)(userInfo, "REFRESH");
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            path: '/'
        });
        res.status(200).send({
            success: true,
            statusCode: 201,
            message: 'User Login Successfully',
            data: userInfo,
            accessToken
        });
    }
    catch (err) {
    }
});
exports.loginUser = loginUser;
const changePassword = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { newPassword, oldPassword } = req.body;
        const { id } = req.user;
        const user = yield prisma_1.default.user.findFirst({ where: { id } });
        if (!user) {
            return res.status(400).send({
                success: false,
                statusCode: 400,
                message: "User Not Found"
            });
        }
        const isPasswordCorrect = yield bcrypt_1.default.compare(oldPassword, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).send({
                success: false,
                statusCode: 400,
                message: "Password Incorrect"
            });
        }
        const bcryptPassword = yield bcrypt_1.default.hash(newPassword, 12);
        const updateUser = yield prisma_1.default.user.update({
            where: {
                id
            },
            data: {
                password: bcryptPassword
            }
        });
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: 'Password Change Successfully',
        });
    }
    catch (err) {
    }
});
exports.changePassword = changePassword;
