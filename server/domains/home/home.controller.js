// Actions methods
// GET "/"
// GET "/index"
const home = (req, res) => {
  res.render('home/homeview');
};

// GET "/index"
const about = (req, res) => {
res.render('home/about');
};


// Controlador Home
export default {
  home,
  about,

};