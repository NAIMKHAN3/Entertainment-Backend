import jwt from 'jsonwebtoken'
import dotenv from "dotenv";
import config from '../config';
dotenv.config();

export const createToken = (
    payload: any,
    keyType: "ACCESS" | "REFRESH" 
) => {
    if (keyType === "ACCESS") {
        return jwt.sign(payload, config.auth_token!, {
            expiresIn: config.auth_token_expires_in! || "15d",
        });
    } else if (keyType === "REFRESH") {
        return jwt.sign(payload, config.refresh_token!, {
            expiresIn: config.refresh_token_expires_in! || "30d",
        });
    }
return null;
};