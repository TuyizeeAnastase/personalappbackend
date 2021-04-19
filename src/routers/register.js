import express from 'express';
import controller from '../controllers/signUp';
import { signUp } from '../validations/signUp';

const router=express.Router();

router.post('/signUp',signUp,controller.signUp)

module.exports=router;