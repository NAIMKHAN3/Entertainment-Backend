import { NextFunction, Request, Response } from "express";
import prisma from "../../utils/prisma";

export const createBlog = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await prisma.blog.create({ data: req.body })
        res.status(201).send({
            success: true,
            statusCode: 201,
            message: 'Create Blog Successfully',
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const getBlog = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await prisma.blog.findMany();
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: 'Get Blog Successfully',
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const getBlogById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const result = await prisma.blog.findFirst({where:{id}});
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: 'Get Blog Successfully',
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const updateBlog = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const result = await prisma.blog.update({
            where: {
                id
            },
            data: req.body
        })
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: 'Update blog Successfully',
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const deleteBlog = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const result = await prisma.blog.delete({
            where: {
                id
            }
        })
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: 'Delete blog Successfully',
            data: result
        })
    }
    catch (err) {

    }
}