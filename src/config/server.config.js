import dotenv from 'dotenv'
dotenv.config()
const APP_CONFIG = {
    ENV: !process.env.ENV ? 'development' : process.env.ENV,
    PORT: !process.env.PORT ? '3000' : process.env.PORT
}
export default APP_CONFIG