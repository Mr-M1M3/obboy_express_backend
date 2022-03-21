import { Router, json } from 'express'
import { login, register } from '../../controllers/auth.controller.js'

const routes = Router()
routes.post('/login', login)
routes.post('/register', register)

const authRouter = Router()
authRouter.use('/auth', json(), routes)

export default authRouter