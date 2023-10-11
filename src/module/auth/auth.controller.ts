import { NextFunction, Request, Response } from "express";
import prisma from "../../utils/prisma";
import bcrypt from 'bcrypt'
import { createToken } from "../../utils/token.utils";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
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
        const accessToken = createToken(userInfo, "ACCESS")
        const refreshToken = createToken(userInfo, "REFRESH")

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            path: '/'
        })
        res.status(201).send({
            success: true,
            statusCode: 201,
            message: 'User Created Successfully',
            data: userInfo,
            accessToken
        })
    }
    catch (err) {

    }
}
export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const { email, password } = req.body;

        const findUser = await prisma.user.findFirst({ where: { email } })
        if (!findUser) {
            return res.status(400).send({
                success: false,
                statusCode: 400,
                message: "User Not Found"
            })
        }
        const isPasswordCorrect = await bcrypt.compare(password, findUser.password)

        if (!isPasswordCorrect) {
            return res.status(400).send({
                success: false,
                statusCode: 400,
                message: "Password Incorrect"
            })
        }

        const userInfo = {
            id: findUser.id,
            email: findUser.email,
            address: findUser.address,
            contactNo: findUser.contactNo,
            role: findUser.role,
            profileImg: findUser.profileImg,
        }
        const accessToken = createToken(userInfo, "ACCESS")
        const refreshToken = createToken(userInfo, "REFRESH")

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            path: '/'
        })
        res.status(200).send({
            success: true,
            statusCode: 201,
            message: 'User Login Successfully',
            data: userInfo,
            accessToken
        })
    }
    catch (err) {

    }
}
export const changePassword = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const { newPassword, oldPassword } = req.body;
        const { id } = req.user;


        const user = await prisma.user.findFirst({ where: { id } })

        if (!user) {
            return res.status(400).send({
                success: false,
                statusCode: 400,
                message: "User Not Found"
            })
        }
        const isPasswordCorrect = await bcrypt.compare(oldPassword, user.password)

        if (!isPasswordCorrect) {
            return res.status(400).send({
                success: false,
                statusCode: 400,
                message: "Password Incorrect"
            })
        }
        const bcryptPassword = await bcrypt.hash(newPassword, 12)

        const updateUser = await prisma.user.update({
            where: {
                id
            },
            data: {
                password: bcryptPassword
            }
        })


        res.status(200).send({
            success: true,
            statusCode: 200,
            message: 'Password Change Successfully',
        })
    }
    catch (err) {

    }
}