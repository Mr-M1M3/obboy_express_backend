import { Router } from "express"
import { githubPublicRouter } from "./api/github.routes.js"

const apiRouter = Router()

const publicRouteAPIs = Router()
publicRouteAPIs.use(githubPublicRouter)

const publicRoutes = Router()
publicRoutes.use('/public',publicRouteAPIs)

export const router = apiRouter