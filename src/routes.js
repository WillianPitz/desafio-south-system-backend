const express = require('express');
const SwapiController = require('./controllers/SwapiController');

const routes = express.Router();

routes.get('/', SwapiController.getAll);

routes.get('/people/:id', SwapiController.getPersonById);

routes.get('/planets/:id', SwapiController.getPlanetById);

routes.get('/films/:id', SwapiController.getFilmById);

routes.get('/species/:id', SwapiController.getSpecieById);

module.exports = routes;