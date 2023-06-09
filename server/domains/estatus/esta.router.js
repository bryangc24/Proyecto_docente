// Importando el Router de Express
import { Router } from 'express';

// Importando el controlador
import estaController from './esta.controller';

// Creando una isntancia del enrutador
const router = new Router();

// Enrutamos
// GET '/'
// GET '/home'
// GET '/index
router.get('/aceptado', estaController.aceptado);

router.get('/espera', estaController.espera);

router.get('/declinado', estaController.declinado);


// Exporto este tramo de ruta
export default router;