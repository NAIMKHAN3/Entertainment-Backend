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
exports.notfoundandler = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const express_validation_1 = require("express-validation");
const config_1 = __importDefault(require("../config"));
const library_1 = require("@prisma/client/runtime/library");
const client_1 = require("@prisma/client");
const handleValidationError_1 = __importDefault(require("./handleValidationError"));
const handlePrismaClientError_1 = __importDefault(require("./handlePrismaClientError"));
const notfoundandler = (req, res, next) => {
    next(http_errors_1.default.NotFound());
};
exports.notfoundandler = notfoundandler;
const errorHandler = (err, req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let statusCode = 400;
    let message = err.message;
    let errorMessage;
    if (err instanceof express_validation_1.ValidationError) {
        statusCode = err.statusCode;
        message = err.message;
        errorMessage = err === null || err === void 0 ? void 0 : err.details;
    }
    else if (err instanceof library_1.PrismaClientValidationError) {
        const error = (0, handleValidationError_1.default)(err);
        statusCode = error.statusCode;
        message = error.message;
        errorMessage = error.errorMessages;
    }
    else if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        const error = (0, handlePrismaClientError_1.default)(err);
        statusCode = error.statusCode,
            message = error.message,
            (errorMessage = [
                {
                    path: "",
                    message: error.errorMessages,
                },
            ]);
    }
    res.status(statusCode).json({
        success: false,
        message,
        errorMessage,
        stack: config_1.default.env !== 'production' ? err === null || err === void 0 ? void 0 : err.stack : undefined,
    });
});
exports.default = errorHandler;
