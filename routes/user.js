
import express from 'express'
import  User  from '../models/user.js';
import {findAlluser,createUser,loginUser,getUserDetails,logOut} from '../controller/user.js';
import { isAuthenticated } from '../middlewares/auth.js';




const router = express.Router()

router.get('/all', findAlluser);
 
router.post('/new', createUser);

router.post('/login', loginUser);
router.get('/logout', logOut)

router.get('/me', isAuthenticated,getUserDetails)


export default router;   