import express from "express"
import APP_CONFIG from "./src/config/app-config.js"
import { router } from "./src/routes/index.js"

const app = express()
app.use(APP_CONFIG.API_URL_BASE, router)

try {
    app.listen(APP_CONFIG.PORT, () => {
        console.log(`Successfully started server on port : ${APP_CONFIG.PORT}`)
    })
} catch (error) {
    console.log(error)
}

export default app