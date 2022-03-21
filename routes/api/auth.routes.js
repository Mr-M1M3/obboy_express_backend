import { Router } from 'express'


const routes = Router()
routes.post('/login', login)
routes.post('/register', register)

const authRouter = Router()
authRouter.use('/auth', routes)

export default authRouter