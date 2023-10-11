import { NextFunction, Request, Response } from "express";
import prisma from "../../utils/prisma";

export const createVehicle = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await prisma.vehicle.create({
            data: req.body
        })
        res.status(201).send({
            success: true,
            statusCode: 201,
            message: 'Vehicle Created Successfully',
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const getVehicle = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await prisma.vehicle.findMany();
        res.status(201).send({
            success: true,
            statusCode: 201,
            message: 'Vehicle Get Successfully',
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}