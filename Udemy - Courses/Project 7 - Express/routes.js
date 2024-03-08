const express = require ('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contactController = require('./src/controllers/contactController');


// rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost)

// rotas do contato
route.get('/contato', contactController.paginaInicial);

module.exports = route;