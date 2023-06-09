// Actions methods
// GET "/"
// GET "/index"
const inicio = (req, res) => {
  res.render('form/inicio');
};

// GET "/index"
const alternativa = (req, res) => {
res.render('form/alternativa');
};

const segunda = (req, res) => {
res.render('form/segunda');
};

const act = (req, res) => {
  res.render('form/act');
  };


const normal = (req, res) => {
   res.render('form/normal');
};

const declaracion = (req, res) => {
  res.render('form/declaracion');
};

// Controlador Home
export default {
  inicio,
  alternativa,
  segunda,
  act,
  normal,
  declaracion,
};