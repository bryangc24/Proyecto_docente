// Importando el Router de Express
import { Router } from 'express';

// Importando el controlador
import formController from './form.controller';

// Creando una isntancia del enrutador
const router = new Router();

// Enrutamos
// GET '/'
// GET '/home'
// GET '/index
router.get('/inicio', formController.inicio);

router.get('/alternativa', formController.alternativa);

router.get('/segunda', formController.segunda);

router.get('/act', formController.act);

router.get('/normal', formController.normal);

router.get('/declaracion', formController.declaracion);


// Exporto este tramo de ruta
export default router;