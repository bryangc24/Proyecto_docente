// Importando Mongoose
import mongoose from 'mongoose';
// Desestructurando un generador de Schemas de mongoose
const { Schema } = mongoose;
// Creando el esquema
const ProjectSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellidos: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
// Exportando la compilacon de ProjectSchema
// en un modelo de mongoose
export default mongoose.model('user', ProjectSchema);
