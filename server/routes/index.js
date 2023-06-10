import express from 'express';

const { Router } = express;

const router = Router();

/* GET home page. */
router.get('/', (req, res) => {
  const iconSet = ['🍷', '🎡', '🍕'];
  const icon = iconSet[Math.floor(Math.random() * 3)];
  res.render('index', { title: 'DWPII-2023A', icon });
});

router.get('/author', (req, res) => {
  // Creating a View-Model

  const author = {
    name: 'Brayan Martin',
    lastname: 'Garcia Carrera ',
    age: '24 years',
  };
  // Sending yhe view-model to be renderd by a View

  res.render('Author', author);
});

export default router;
