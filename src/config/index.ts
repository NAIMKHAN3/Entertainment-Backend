import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  auth_token: process.env.AUTH_TOKEN,
  auth_token_expires_in : process.env.AUTH_TOKEN_EXPIRES_IN,
  refresh_token: process.env.REFRESH_TOKEN,
  refresh_token_expires_in: process.env.REFRESH_TOKEN_EXPIRES_IN
}
