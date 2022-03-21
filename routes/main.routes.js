import {Router} from 'express';

import ADMIN_ROUTER from './admin/admin.router.js'; // only handles admin request
import API_ROUTER from './api/api.router.js'; // only handle request from users

const ROUTER = Router();

ROUTER.use('/admin', ADMIN_ROUTER);
ROUTER.use('/api', API_ROUTER);

export default ROUTER;