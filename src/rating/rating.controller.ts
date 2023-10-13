import { NextFunction, Request, Response } from "express";
import prisma from "../utils/prisma";

export const createRating = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.user;
        req.body.userId = id;
        const result = await prisma.cenemaRating.create({ data: req.body })
        res.status(201).send({
            success: true,
            statusCode: 201,
            message: 'Create Rating Successfully',
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
// export const createRating = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const { id } = req.user;
//         req.body.userId = id;
//         const result = await prisma.cenemaRating.create({ data: req.body })
//         res.status(201).send({
//             success: true,
//             statusCode: 201,
//             message: 'Create Rating Successfully',
//             data: result
//         })
//     }
//     catch (err) {
//         next(err)
//     }
// }