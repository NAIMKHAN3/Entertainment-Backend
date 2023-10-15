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
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileUpload = void 0;
const fileUpload = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const file = req.files;
        if ((_a = file[0]) === null || _a === void 0 ? void 0 : _a.location) {
            res.status(200).send({
                success: true,
                data: file[0].location
            });
        }
        else {
            res.status(400).send({
                success: false,
                message: "File Upload failed"
            });
        }
    }
    catch (err) {
        next(err);
    }
});
exports.fileUpload = fileUpload;
