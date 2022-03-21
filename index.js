import express from "express"
import CONFIG from "./config/server.config.js"
import router from "./routes/api.routes.js"
import { server_error, not_found } from './utils/errors.js'
import { connectDB } from "./datalayer/DatabaseInstance.js"

const app = express()

connectDB().then(data => {
    if (data.success) {
        console.log("Connected to DB sucessfully")

        app.use(CONFIG.API_URL_BASE, router)
        // 404 handler
        app.use(not_found)
        // internal server error handler
        app.use(server_error)

        const SERVER = app.listen(CONFIG.PORT, (error) => {
            if (!error) {
                console.log(`Listening on port : ${CONFIG.PORT}`)
            } else {
                console.error(error);
                process.exit(1);
            }
        });

        process.on('SIGTERM', () => {
            console.info("Closing the server");
            SERVER.close((error) => {
                if (!error) {
                    console.info("Server closed successfully");
                    process.exit(0)
                } else {
                    console.info("Error while closing the server, exiting...");
                    process.exit(1);
                }
            })
        })
    } else {
        console.log("Failed to connect with DB")
    }
}).catch(err=>{
    console.log(err)
})
