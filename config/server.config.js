import dotenv from 'dotenv'
dotenv.config()
const APP_CONFIG = {
    NODE_ENV: process.env.ENV ?? 'development',
    PORT: process.env.PORT ?? '3000',
    API_URL_BASE: process.env.API_URL_BASE ?? '/api',
    MONGO_DB_URL: process.env.MONGO_DB_URL,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
}
export default APP_CONFIG