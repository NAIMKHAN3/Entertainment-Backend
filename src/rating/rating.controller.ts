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
export const getRating = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await prisma.cenemaRating.findMany({
             include:{
                user:true,
                 cenema:true
                }
            })
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: 'Get Rating Successfully',
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}