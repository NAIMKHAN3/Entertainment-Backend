"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uploader_1 = __importDefault(require("../utils/uploader"));
const fileUploadMiddleware = (req, res, next) => {
    console.log("fileUploadMiddleware");
    const multerUploader = (0, uploader_1.default)({
        allowedFileTypes: [
            "image/jpeg",
            "image/png",
            "image/jpg",
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "application/vnd.ms-excel",
        ],
        errorMessage: "Only .jpg, .jpeg, .png, .pdf, .doc, .docx, .xls format allowed!",
        maxFileSize: 1024 * 1024 * 10, // 5MB
    });
    multerUploader.any()(req, res, (err) => {
        if (err) {
            return res.status(400).json({
                name: "FileUploadError",
                message: "File upload error",
                statusCode: 400,
                error: "Bad Request",
                details: [
                    {
                        file: err.message,
                    },
                ],
            });
        }
        next();
    });
};
exports.default = fileUploadMiddleware;
