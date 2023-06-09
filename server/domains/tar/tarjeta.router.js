// Importando el Router de Express
import { Router } from 'express';

// Importando el controlador
import tarjetaController from './tarjeta.controller';

// Creando una isntancia del enrutador
const router = new Router();

// Enrutamos
// GET '/'
// GET '/home'
// GET '/index
router.get('/tarjetaone', tarjetaController.tarjetaone);

router.get('/tarjetados', tarjetaController.tarjetados);




// Exporto este tramo de ruta
export default router;