import { NextFunction, Request, Response } from "express";
import prisma from "../../utils/prisma";

export const createFaq = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await prisma.fAQ.create({ data: req.body })
        res.status(201).send({
            success: true,
            statusCode: 201,
            message: "FAQ Added Successs",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const updateFaq = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const result = await prisma.fAQ.update({
            where:{
                id
            },
            data: req.body
        })
        res.status(200).send({
            success:true,
            statusCode: 200,
            message: "FAQ Update Successs",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const getFaq = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await prisma.fAQ.findMany()
        res.status(200).send({
            success:true,
            statusCode: 200,
            message: "FAQ Get Successs",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const deleteFaq = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const result = await prisma.fAQ.delete({
            where:{
                id
            }
        })
        res.status(200).send({
            success:true,
            statusCode: 200,
            message: "FAQ Delete Successs",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const getFaqById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const result = await prisma.fAQ.findFirst({
            where:{
                id
            }
        })
        res.status(200).send({
            success:true,
            statusCode: 200,
            message: "Get FAQ Successs",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}