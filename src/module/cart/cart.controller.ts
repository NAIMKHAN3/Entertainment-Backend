import { NextFunction, Request, Response } from "express";
import prisma from "../../utils/prisma";

export const createCart = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.user;
        req.body.userId = id;
        const findUsedCart = await prisma.cart.findFirst({
            where: req.body
        });

        if (findUsedCart) {
            res.status(400).send({
                success: false,
                message: "Already Added This Cinema"
            })
        }
        else {
            const result = await prisma.cart.create({ data: req.body })
            res.status(200).send({
                success: true,
                message: "Add to cart successfull"
            })
        }
    }
    catch (err) {
        next(err)
    }
}

export const getCart = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.user;
        const result = await prisma.cart.findMany({
            where: {
                userId: id
            }
        })
        res.status(200).send({
            success: true,
            message: "Get User cart successfull",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}