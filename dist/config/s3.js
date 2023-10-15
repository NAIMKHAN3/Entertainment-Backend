"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_s3_1 = require("@aws-sdk/client-s3");
const index_1 = __importDefault(require("./index"));
const s3 = new client_s3_1.S3Client({
    region: index_1.default.aws_s3_region,
    credentials: {
        accessKeyId: index_1.default.aws_access_key,
        secretAccessKey: index_1.default.aws_secret_key,
    },
    apiVersion: "2006-03-01",
});
exports.default = s3;
