"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fileUploadMiddleware_1 = __importDefault(require("../../middleware/fileUploadMiddleware"));
const controller_1 = require("./controller");
const router = (0, express_1.Router)();
router.post('/upload', fileUploadMiddleware_1.default, controller_1.fileUpload);
exports.default = router;
