import { NextFunction, Request, Response } from "express";
import prisma from "../../utils/prisma";

export const createBooking = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.user;
        req.body.userId = id;
        const result = await prisma.booking.create({ data: req.body })
        res.status(200).send({
            success: true,
            message: "Booking Added Success"
        })
    }
    catch (err) {
        next(err)
    }
}