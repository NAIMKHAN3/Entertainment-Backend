import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import createError from "http-errors";
import jwt from "jsonwebtoken";

dotenv.config();

export const verifyJwt = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) return next(createError.Unauthorized("Access denied"));
    try {
        const verified = jwt.verify(token, process.env.AUTH_TOKEN || "");
        req.user = verified;
        next();
    } catch (error) {
        console.log(error);
        next(
            createError.Unauthorized(`Access denied, invalid token: ${token}`)
        );
    }
};