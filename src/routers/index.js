import { Router } from 'express';
import welcome from './welcome.js';
import register from './register.js';


const router=Router();


router.use('/',welcome);
router.use('/api/v1',register);


export default router;