import {Router} from 'express';
import controllers from './controllers/api.controller.js';
const ROUTER = Router();

ROUTER.use('/', controllers.base);

export default ROUTER;