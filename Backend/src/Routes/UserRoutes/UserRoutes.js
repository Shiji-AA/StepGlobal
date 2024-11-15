import express from 'express';

const router= express.Router()
import {loginUser, registerUser} from '../../Controller/UserController/UserController.js'


router.post('/register',registerUser)
router.post('/login',loginUser)

export default router;