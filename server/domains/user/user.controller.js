// Actions methods
// GET "/user/login"
import log from '../../config/winston';

const login = (req, res) => {
  res.render('user/login');
};

// GET "/user/logout"
const logout = (req, res) => {
  res.send('👷‍♂️ Under Construction : GET /user/logout 🚧');
};

// GET "/user/register"
const register = (req, res) => {
  res.render('user/register');
};

// POST "/user/add"
const addPost = (req, res) => {
  // Extrayendo la informacion
  // del formulario
  const { name, password } = req.body;
  // Regresando al cliente la información recabada
  res.status(200).json({
    name,
    password,
  });
};
const lo = (req, res) => {
  // Rescatando la info del formulario
  const { errorData: validationError } = req;
  // En caso de haber error
  // se le informa al cliente
  if (validationError) {
    log.info('Error de correo');
    // Se desestructuran los datos de validación
    const { value: project } = validationError;
    // Se extraen los campos que fallaron en la validación
    const errorModel = validationError.inner.reduce((prev, curr) => {
      // Creando una variable temporal para
      // evitar el error "no-param-reassing"
      const workingPrev = prev;
      workingPrev[`${curr.path}`] = curr.message;
      return workingPrev;
    }, {});
    return res.status(422).render('user/login', { project, errorModel });
  }
  // En caso de que pase la validación
  // Se desestructura la información
  // de la peticion
  const { validData: project } = req;
  // Se contesta la información
  // del proyecto al cliente
  log.info('Se necesita un Correo');
  return res.status(200).json(project);
};
// Controlador user
export default {
  // Estos son los Accion Methods
  login,
  logout,
  register,
  lo,
  addPost,
};
