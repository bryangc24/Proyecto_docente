import createError from 'http-errors';

// import the express library
import express from 'express';

import path from 'path';

import cookieParser from 'cookie-parser';
// Library to log http communication
import morgan from 'morgan';

// Importing subroutes
// import indexRouter from '@server/routes/index';
// import usersRouter from '@server/routes/users';
// import apiRouter from '@server/routes/api';

// Importando enrutador

// Setting Webpack Modules

import webpack from 'webpack';
import WebpackDevmiddlegare from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import router from './router';

// importando el onfigurador de mootor de plantillas
import configTemplateEngine from './config/templateEngine';

// Importing webpack Configuration

import webpackConfig from '../webpack.dev.config';

// Impornting winston logger
import log from './config/winston';

// Creando variable del directorio raiz
// eslint-disable-next-line
global["__rootdir"] = path.resolve(process.cwd());

// We are creating the express instance
const app = express();

// Get the execution mode

const nodeEnviroment = process.env.NODE_ENV || 'production';

// Deciding if we add  webpack middleware or not
const { body, validationResult } = require('express-validator');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.get('/user', (req, res) => {
  res.render('register');
});

app.post(
  '/user/register',
  [
    body('nya', 'Ingrese un nombre Completo').exists().isLength({ min: 10 }),
    body('email', 'Ingrese un E-mail valido').exists().isEmail(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  }
);
if (nodeEnviroment === 'development') {
  // start webpack dev server
  console.log('🎧 Ejecutando el modo desarrollo');
  // Adding the key
  webpackConfig.mode = nodeEnviroment;

  webpackConfig.devServer.port = process.env.PORT;

  webpackConfig.entry = [
    'webpack-hot-middleware/client?reload=true&timeout=1000',
    webpackConfig.entry,
  ];

  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

  const bundle = webpack(webpackConfig);

  app.use(
    WebpackDevmiddlegare(bundle, {
      publicPath: webpackConfig.output.PublicPath,
    })
  );

  app.use(WebpackHotMiddleware(bundle));
} else {
  console.log('👘 Ejecutando modo produccion');
}

// View Engine Setup
configTemplateEngine(app);

// Registering midlewares
// Log all received requests
app.use(morgan('combined', { stream: log.stream }));
// Parse request data into jason
app.use(express.json());
// Decode url info
app.use(express.urlencoded({ extended: false }));
// Parse client Cookies into json
app.use(cookieParser());
// Set up the static file server
app.use(express.static(path.join(__dirname, '../public')));

// Registering routes
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/api', apiRouter);

router.addRoutes(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  log.info(`404 Pagina no encontrada ${req.method} ${req.originalUrl}`);
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  log.error(`${err.status || 500} - ${err.message}`);
  res.render('error');
});

export default app;
