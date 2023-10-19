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
export const updateBookingStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { status } = req.query;
        if (!status) {
            return  res.status(400).send({
                success: false,
                message: `Status is required`
            })
        }
        const updateStatus = status === 'Accepted' ? "Accepted" : "Rejected"

        const result = await prisma.booking.update({
            where: {
                id
            },

            data: {
                status: updateStatus
            }
        })
        console.log(result)
        res.status(200).send({
            success: true,
            message: `Booking ${status}`
        })
    }
    catch (err) {
        next(err)
    }
}
export const updatePaymentStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;


        const result = await prisma.booking.update({
            where: {
                id
            },
            data: req.body
        })
        console.log(result)
        res.status(200).send({
            success: true,
            message: `Payment Success`
        })
    }
    catch (err) {
        next(err)
    }
}

export const updateBooking = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const result = await prisma.booking.update({
            where: {
                id
            },

            data: req.body
        })
        console.log(result)
        res.status(200).send({
            success: true,
            message: `Booking Updated`
        })
    }
    catch (err) {
        next(err)
    }
}

export const getBooking = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await prisma.booking.findMany({
            include: {
                user: true,
                cenema: true
            }
        })
        res.status(200).send({
            success: true,
            message: "Get Booking Success",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}

export const getBookingById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;    
        const result = await prisma.booking.findFirst({
            where:{
                id
            },
            include:{
                cenema: true
            }
        })
        res.status(200).send({
            success: true,
            message: "Get Booking Success",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const deleteBooking = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;    
        const result = await prisma.booking.delete({
            where:{
                id
            }
        })
        res.status(200).send({
            success: true,
            message: "Delete Booking Success",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}

export const getBookingByUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.user;
        const result = await prisma.booking.findMany({
            where: {
                userId: id
            },
            include: {
                user: true,
                cenema: true
            }
        })
        res.status(200).send({
            success: true,
            message: "Get Booking Success",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}