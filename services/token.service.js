import jwt from "jsonwebtoken"
import APP_CONFIG from "../config/server.config.js"

export const createToken =
    (user_id) =>
        jwt.sign(user_id, APP_CONFIG.ACCESS_TOKEN_SECRET)

export const verifyToken = (token) => {
    jwt.verify(token, APP_CONFIG.ACCESS_TOKEN_SECRET, (err, user_id) => {
        if (err) return null
        return user_id
    })
} 