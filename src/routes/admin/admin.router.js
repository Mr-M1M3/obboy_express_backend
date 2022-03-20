import {Router} from 'express';
import controllers from './controllers/admin.controller.js';
const ROUTER = Router();

ROUTER.use('/', controllers.base);

export default ROUTER;