// Importando biblioteca de validacion
import * as Yup from 'yup';

// Creando un esquema de validación para el proyecto
const userSchema = Yup.object().shape({
  name: Yup.string().required,
  password: Yup.string().min(6).required,
});

// Creando el extractor de datos de la petición
const getUser = (req) => {
  // Extrayendo datos de la petición
  const { name, password } = req.body;
  // Regresando el objeto proyecto
  return {
    name,
    password,
  };
};

export default {
  userSchema,
  getUser,
};
