import { Router } from 'express'
import authRouter from './api/auth.routes'

const ROUTER = Router()

const apiPublicRoutes = Router()
apiPublicRoutes.use(authRouter)

ROUTER.use('/public', apiPublicRoutes)

export default ROUTER