// Importando el Router de Express
import { Router } from 'express';

// Importando el controlador
import listasController from './lista.controller';

// Creando una isntancia del enrutador
const router = new Router();

// Enrutamos
// GET '/'
// GET '/home'
// GET '/index
router.get('/uno', listasController.uno);

router.get('/dos', listasController.dos);

router.get('/tres', listasController.tres);

router.get('/cuatro', listasController.cuatro);

router.get('/cinco', listasController.cinco);

router.get('/seis', listasController.seis);


// Exporto este tramo de ruta
export default router;