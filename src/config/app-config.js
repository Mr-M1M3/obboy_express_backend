import dotenv from 'dotenv'
dotenv.config()
const APP_CONFIG = {
    ENV: process.env.ENV ?? 'development',
    PORT: process.env.PORT ?? '3000',
    API_URL_BASE: process.env.API_URL_BASE ?? '/api'
}
export default APP_CONFIG