"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifySuperAdmin = void 0;
const verifySuperAdmin = (req, res, next) => {
    try {
        const { role } = req.user;
        if (role === "SuperAdmin") {
            return next();
        }
        return res
            .status(400)
            .send({ status: false, message: "You are not a super admin" });
    }
    catch (err) {
        res.status(500).json({
            status: false,
            message: "Internal server error",
        });
    }
};
exports.verifySuperAdmin = verifySuperAdmin;
