import { NextFunction, Request, Response } from "express";
import prisma from "../../utils/prisma";

export const getProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.user;
        const result = await prisma.user.findFirst({
            where: {
                id
            }
        })
        res.status(200).send({
            success: true,
            statusCode: 200,
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}

export const updateProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.user;
        const result = await prisma.user.update({
            where: {
                id
            },
            data:req.body
        })
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Profile Updated",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}