import { NextFunction, Request, Response } from "express";

export const verifySuperAdmin = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { role } = req.user;

        if (role === "SuperAdmin") {
            return next();
        }
        return res
            .status(400)
            .send({ status: false, message: "You are not a super admin" });
    } catch (err) {
        res.status(500).json({
            status: false,
            message: "Internal server error",
        });
    }
};