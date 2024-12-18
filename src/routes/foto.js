import { Router } from 'express';
import multer from 'multer';


import fotoController from '../controllers/Foto'
import multerConfig from '../config/multer';
import loginRequired from '../middlewares/loginRequired';

const upload = multer(multerConfig)

const router = new Router();

router.post('/', loginRequired, fotoController.store)

export default router