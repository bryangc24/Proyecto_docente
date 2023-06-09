// Actions methods
// GET "/"
// GET "/index"
const uno = (req, res) => {
  res.render('list/uno');
};

// GET "/index"
const dos = (req, res) => {
res.render('list/dos');
};

const tres = (req, res) => {
res.render('list/tres');
};

const cuatro = (req, res) => {
  res.render('list/cuatro');
  };


const cinco = (req, res) => {
   res.render('list/cinco');
};

const seis = (req, res) => {
  res.render('list/seis');
};

// Controlador Home
export default {
  uno,
  dos,
  tres,
  cuatro,
  cinco,
  seis,
};