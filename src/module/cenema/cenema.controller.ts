import { NextFunction, Request, Response } from "express";
import prisma from "../../utils/prisma";

export const createCenema = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(req.body)
        const result = await prisma.cenema.create({ data: req.body })

        res.status(201).send({
            success: true,
            statusCode: 201,
            message: 'Create Cenema Successfully',
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const getCenema = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await prisma.cenema.findMany({include:{category:true}});
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: 'Get Cenema Successfully',
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const updateCenema = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const result = await prisma.cenema.update({
            where: {
                id
            },
            data: req.body
        })
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: 'Update cenema Successfully',
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const result = await prisma.cenema.delete({
            where: {
                id
            }
        })
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: 'Delete cenema Successfully',
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}