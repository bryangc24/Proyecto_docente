// Importando el Router de Express
import { Router } from 'express';

// Importando el controlador
import convoController from './convo.controller';

// Creando una isntancia del enrutador
const router = new Router();

// Enrutamos
// GET '/'
// GET '/home'
// GET '/index

router.get('/convo', convoController.convo);

// Exporto este tramo de ruta
export default router;