import { NextFunction, Request, Response } from "express";
import prisma from "../../utils/prisma";
import bcrypt from 'bcrypt';

export const createAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const { email, password } = req.body;
        const isExistingUser = await prisma.user.findFirst({ where: { email } })
        if (isExistingUser) {
            return res.status(400).send({
                success: false,
                statusCode: 400,
                message: "User Already Exist"
            })
        }
        req.body.password = await bcrypt.hash(password, 12)
        req.body.role = 'Admin'
        const userInfo = await prisma.user.create({
            data: req.body,
            select: {
                id: true,
                email: true,
                contactNo: true,
                address: true,
                role: true,
                profileImg: true
            }
        })

        res.status(201).send({
            success: true,
            statusCode: 201,
            message: 'Admin Created Successfully',
            data: userInfo,
        })
    }
    catch (err) {

    }
}

export const getAllUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await prisma.user.findMany({
            where: {
                role: 'User'
            }
        })
        res.status(200).send({
            success: true,
            message: 'Get All User Success',
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const getAllAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await prisma.user.findMany({
            where: {
                role: 'Admin'
            }
        })
        res.status(200).send({
            success: true,
            message: 'Get All Admin Success',
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const getAllSuperAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await prisma.user.findMany({
            where: {
                role: 'SuperAdmin'
            }
        })
        res.status(200).send({
            success: true,
            message: 'Get All Super Admin Success',
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}

export const userRoleUpdate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const result = await prisma.user.update({
            where: {
                id
            },
            data: req.body
        })
        res.status(200).send({
            success: true,
            message: `User ${req?.body?.role} Success`,
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const deleteCart = await prisma.cart.deleteMany({where:{userId:id}})
        const deleteBooking = await prisma.booking.deleteMany({where:{userId:id}})
        const deleteRating = await prisma.cenemaRating.deleteMany({where:{userId:id}})
        const deleteComment = await prisma.comment.deleteMany({where:{userId:id}})
       
        const result = await prisma.user.delete({
            where: {
                id
            }
        })
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "User Deleted Success",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}