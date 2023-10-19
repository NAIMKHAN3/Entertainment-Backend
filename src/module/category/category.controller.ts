import { NextFunction, Request, Response } from "express";
import prisma from "../../utils/prisma";

export const createCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await prisma.cenemaCategory.create({ data: req.body })
        res.status(201).send({
            success: true,
            statusCode: 201,
            message: 'Create Category Successfully',
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const getCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await prisma.cenemaCategory.findMany();
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: 'Get Category Successfully',
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const getCategoryById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const result = await prisma.cenemaCategory.findFirst({where:{id}});
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: 'Get Category Successfully',
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const updateCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const result = await prisma.cenemaCategory.update({
            where: {
                id
            },
            data: req.body
        })
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: 'Update Category Successfully',
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
        const deleteMovie = await prisma.cenema.deleteMany({where:{categoryId:id}})
        const result = await prisma.cenemaCategory.delete({
            where: {
                id
            }
        })
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: 'Delete Category Successfully',
            data: result
        })
    }
    catch (err) {

    }
}