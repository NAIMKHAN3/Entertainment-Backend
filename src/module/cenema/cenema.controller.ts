import { NextFunction, Request, Response } from "express";
import prisma from "../../utils/prisma";
import { Prisma } from "@prisma/client";

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
        const { page, size, sortOrder,search } = req.query;
        let skip = (parseInt(page as string) - 1) || 0;
        const take = (parseInt(size as string)) || 10;
        const order = (sortOrder as string)?.toLowerCase() === 'desc' ? 'desc' : 'asc';

        const whereCondition: Prisma.CenemaWhereInput[] = []
        if (skip < 0) {
            skip = 0
        }
        if (search) {
            whereCondition.push({
                OR: [
                    { name: { contains: search as string, mode: 'insensitive' } },
                    { producerName: { contains: search as string, mode: 'insensitive' } },
                    { productionManager: { contains: search as string, mode: 'insensitive' } },
                ],
            });
        }

        const result = await prisma.cenema.findMany({
            where: {
                AND: whereCondition
            },
            skip: skip * take,
            take,
            include: { category: true }
        });
        const total = await prisma.cenema.count();
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: 'Get Cenema Successfully',
            meta: {
                page: skip,
                size: take,
                total,
                totalPage: Math.ceil(total / take)
            },
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
export const getCinemaById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const result = await prisma.cenema.findFirst({
            where: {
                id
            },
            include: {
                category: true,
                rating: {
                    include:{
                        user: true
                    }
                }
            }
        })
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: 'Get cenema by id Successfully',
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}

export const deleteCinema = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const deleteCart = await prisma.cart.deleteMany({ where: { cenemaId: id } })
        const deleteBooking = await prisma.booking.deleteMany({ where: { cenemaId: id } })
        const deleteRating = await prisma.cenemaRating.deleteMany({ where: { cenemaId: id } })
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