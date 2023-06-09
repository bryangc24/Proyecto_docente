// Actions methods
// GET "/"
// GET "/index"
const aceptado = (req, res) => {
  res.render('esta/aceptado');
};

// GET "/index"
const espera = (req, res) => {
res.render('esta/espera');
};

const declinado = (req, res) => {
res.render('esta/declinado');
};


export default {
  aceptado,
  espera,
  declinado,
};