"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const config_1 = __importDefault(require("../config"));
dotenv_1.default.config();
const createToken = (payload, keyType) => {
    if (keyType === "ACCESS") {
        return jsonwebtoken_1.default.sign(payload, config_1.default.auth_token, {
            expiresIn: config_1.default.auth_token_expires_in || "15d",
        });
    }
    else if (keyType === "REFRESH") {
        return jsonwebtoken_1.default.sign(payload, config_1.default.refresh_token, {
            expiresIn: config_1.default.refresh_token_expires_in || "30d",
        });
    }
    return null;
};
exports.createToken = createToken;
