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