"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_index_1 = __importDefault(require("../module/auth/auth.index"));
const fileUpload_1 = __importDefault(require("../module/fileUpload"));
const superAdmin_1 = __importDefault(require("../module/superAdmin"));
const category_index_1 = __importDefault(require("../module/category/category.index"));
const cenema_index_1 = __importDefault(require("../module/cenema/cenema.index"));
const faq_index_1 = __importDefault(require("../module/faq/faq.index"));
const user_index_1 = __importDefault(require("../module/user/user.index"));
const cart_index_1 = __importDefault(require("../module/cart/cart.index"));
const booking_index_1 = __importDefault(require("../module/booking/booking.index"));
const rating_index_1 = __importDefault(require("../module/rating/rating.index"));
const blog_index_1 = __importDefault(require("../module/blog/blog.index"));
const router = (0, express_1.Router)();
router.use('/super-admin', superAdmin_1.default);
router.use('/auth', auth_index_1.default);
router.use('/file', fileUpload_1.default);
router.use('/category', category_index_1.default);
router.use('/cenema', cenema_index_1.default);
router.use('/faq', faq_index_1.default);
router.use('/user', user_index_1.default);
router.use('/cart', cart_index_1.default);
router.use('/booking', booking_index_1.default);
router.use('/rating', rating_index_1.default);
router.use('/blog', blog_index_1.default);
exports.default = router;
