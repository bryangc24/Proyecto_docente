// Importando el Router de Express
import { Router } from 'express';

// Importando el controlador
import registerController from './register.controller';

// Creando una isntancia del enrutador
const router = new Router();

// Enrutamos
// GET '/'
// GET '/register'
// GET '/register

router.get('/regi', registerController.regi);

// Exporto este tramo de ruta
export default router;
