"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookingByUser = exports.deleteBooking = exports.getBookingById = exports.getBooking = exports.updateBooking = exports.updatePaymentStatus = exports.updateBookingStatus = exports.createBooking = void 0;
const prisma_1 = __importDefault(require("../../utils/prisma"));
const createBooking = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.user;
        req.body.userId = id;
        const result = yield prisma_1.default.booking.create({ data: req.body });
        res.status(200).send({
            success: true,
            message: "Booking Added Success"
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createBooking = createBooking;
const updateBookingStatus = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { status } = req.query;
        if (!status) {
            return res.status(400).send({
                success: false,
                message: `Status is required`
            });
        }
        const updateStatus = status === 'Accepted' ? "Accepted" : "Rejected";
        const result = yield prisma_1.default.booking.update({
            where: {
                id
            },
            data: {
                status: updateStatus
            }
        });
        console.log(result);
        res.status(200).send({
            success: true,
            message: `Booking ${status}`
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateBookingStatus = updateBookingStatus;
const updatePaymentStatus = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield prisma_1.default.booking.update({
            where: {
                id
            },
            data: req.body
        });
        console.log(result);
        res.status(200).send({
            success: true,
            message: `Payment Success`
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updatePaymentStatus = updatePaymentStatus;
const updateBooking = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield prisma_1.default.booking.update({
            where: {
                id
            },
            data: req.body
        });
        console.log(result);
        res.status(200).send({
            success: true,
            message: `Booking Updated`
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateBooking = updateBooking;
const getBooking = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.booking.findMany({
            include: {
                user: true,
                cenema: true
            }
        });
        res.status(200).send({
            success: true,
            message: "Get Booking Success",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getBooking = getBooking;
const getBookingById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield prisma_1.default.booking.findFirst({
            where: {
                id
            },
            include: {
                cenema: true
            }
        });
        res.status(200).send({
            success: true,
            message: "Get Booking Success",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getBookingById = getBookingById;
const deleteBooking = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield prisma_1.default.booking.delete({
            where: {
                id
            }
        });
        res.status(200).send({
            success: true,
            message: "Delete Booking Success",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteBooking = deleteBooking;
const getBookingByUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.user;
        const result = yield prisma_1.default.booking.findMany({
            where: {
                userId: id
            },
            include: {
                user: true,
                cenema: true
            }
        });
        res.status(200).send({
            success: true,
            message: "Get Booking Success",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getBookingByUser = getBookingByUser;
