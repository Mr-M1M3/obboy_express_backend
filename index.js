import express from "express";
import CONFIG from "./src/config/server.config.js";
import router from "./src/routes/main.routes.js";
import {server_error, not_found} from './src/lib/errors.js';

const app = express();

app.use(router);

// 404 handler
app.use(not_found);

// internal server error handler
app.use(server_error)

const SERVER = app.listen(CONFIG.PORT, (error) => {
    if (!error) {
        console.log(`listening on port : ${CONFIG.PORT}`)
    } else {
        console.error(error);
        process.exit(1);
    }
});

process.on('SIGTERM', () => {
    console.info("Closing the server");
    SERVER.close((error) => {
        if(!error){
            console.info("Server closed successfully");
            process.exit(0)
        }else{
            console.info("Error while closing the server, exiting...");
            process.exit(1);
        }
    })
})