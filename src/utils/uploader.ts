import multer from "multer";
import path from "path";
import { IUploadFile } from "../types/interface";

import multerS3 from "multer-s3";
import s3 from "../config/s3";
import config from "../config";

const DEFAULT_ALLOWED_FILE_TYPES = ["image/jpeg", "image/png"];
const DEFAULT_MAX_FILE_SIZE = 1024 * 1024 * 10; // 5MB

const uploader = ({
    allowedFileTypes = DEFAULT_ALLOWED_FILE_TYPES,
    errorMessage = "Invalid file type",
    maxFileSize = DEFAULT_MAX_FILE_SIZE,
}: IUploadFile) => {
    const storage = multerS3({
        s3: s3,
        bucket: config.files_bucket_name as string,
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            const fileExt = path.extname(file.originalname);
            const fileName = `${file.originalname
                .replace(fileExt, "")
                .toLowerCase()
                // .split(" ")
                // .join("-")}-${Date.now()
                }`;

            cb(null, fileName + fileExt);
        },
    });

    const fileFilter = (req: any, file: any, cb: any) => {
        const mimeIndex = allowedFileTypes.findIndex(
            (type) => type === file.mimetype
        );
        if (mimeIndex !== -1) {
            cb(null, true);
        } else {
            cb(new Error(errorMessage));
        }
    };

    const upload = multer({
        storage,
        fileFilter,
        limits: {
            fileSize: maxFileSize,
        },
    });

    return upload;
};

export default uploader;
