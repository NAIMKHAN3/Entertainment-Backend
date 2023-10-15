"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const multer_s3_1 = __importDefault(require("multer-s3"));
const s3_1 = __importDefault(require("../config/s3"));
const config_1 = __importDefault(require("../config"));
const DEFAULT_ALLOWED_FILE_TYPES = ["image/jpeg", "image/png"];
const DEFAULT_MAX_FILE_SIZE = 1024 * 1024 * 10; // 5MB
const uploader = ({ allowedFileTypes = DEFAULT_ALLOWED_FILE_TYPES, errorMessage = "Invalid file type", maxFileSize = DEFAULT_MAX_FILE_SIZE, }) => {
    const storage = (0, multer_s3_1.default)({
        s3: s3_1.default,
        bucket: config_1.default.files_bucket_name,
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            const fileExt = path_1.default.extname(file.originalname);
            const fileName = `${file.originalname
                .replace(fileExt, "")
                .toLowerCase()
            // .split(" ")
            // .join("-")}-${Date.now()
            }`;
            cb(null, fileName + fileExt);
        },
    });
    const fileFilter = (req, file, cb) => {
        const mimeIndex = allowedFileTypes.findIndex((type) => type === file.mimetype);
        if (mimeIndex !== -1) {
            cb(null, true);
        }
        else {
            cb(new Error(errorMessage));
        }
    };
    const upload = (0, multer_1.default)({
        storage,
        fileFilter,
        limits: {
            fileSize: maxFileSize,
        },
    });
    return upload;
};
exports.default = uploader;
