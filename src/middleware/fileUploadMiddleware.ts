import { NextFunction, Request, Response } from "express";
import uploader from "../utils/uploader";


const fileUploadMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log("fileUploadMiddleware");
    const multerUploader = uploader({
        allowedFileTypes: [
            "image/jpeg",
            "image/png",
            "image/jpg",
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "application/vnd.ms-excel",
        ],
        errorMessage:
            "Only .jpg, .jpeg, .png, .pdf, .doc, .docx, .xls format allowed!",
        maxFileSize: 1024 * 1024 * 10, // 5MB
    });

    multerUploader.any()(req, res, (err: any) => {
        if (err) {
            return res.status(400).json({
                name: "FileUploadError",
                message: "File upload error",
                statusCode: 400,
                error: "Bad Request",
                details: [
                    {
                        file: err.message,
                    },
                ],
            });
        }

        next();
    });
};

export default fileUploadMiddleware;
