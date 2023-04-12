
import express from 'express'
import  User  from '../models/user.js';
import {findAlluser,createUser} from '../controller/user.js';



const router = express.Router()

router.get('/all', findAlluser);
 
router.post('/new', createUser)

 export default router;   