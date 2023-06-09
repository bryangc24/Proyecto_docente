// Actions methods
// GET "/"
// GET "/index"
const tarjetaone = (req, res) => {
  res.render('tarjeta/tarjetaone');
};

// GET "/index"
const tarjetados = (req, res) => {
res.render('tarjeta/tarjetados');
};


// Controlador Home
export default {
  tarjetaone,
  tarjetados,
};