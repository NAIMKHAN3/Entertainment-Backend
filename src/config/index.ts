import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  auth_token: process.env.AUTH_TOKEN,
  auth_token_expires_in : process.env.AUTH_TOKEN_EXPIRES_IN,
  refresh_token: process.env.REFRESH_TOKEN,
  refresh_token_expires_in: process.env.REFRESH_TOKEN_EXPIRES_IN,
  aws_access_key: process.env.ACCESS_KEY,
  aws_secret_key: process.env.AWS_SECRET_ACCESS_KEY,
  files_bucket_name: process.env.FILES_BUCKET_NAME,
  aws_s3_region: process.env.AWS_S3_REGION
}
