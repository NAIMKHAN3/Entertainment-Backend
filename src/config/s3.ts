import { S3Client } from "@aws-sdk/client-s3";

import config from './index'

const s3 = new S3Client({
    region: config.aws_s3_region,
    credentials: {
        accessKeyId: config.aws_access_key as string,
        secretAccessKey: config.aws_secret_key as string,
    },
    apiVersion: "2006-03-01",
});

export default s3;
