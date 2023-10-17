import { NextFunction, Request, Response } from "express";
import prisma from "../../utils/prisma";

export const createRating = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.user;
        req.body.userId = id;
        req.body.rating = parseFloat(req.body.rating)
        const result = await prisma.cenemaRating.create({ data: req.body })
        res.status(200).send({
            success: true,
            message: "Rating Success"
        })
    }
    catch (err) {
        next(err)
    }
}