const express = require('express');

const produtoController = require('./controllers/produtoController');
const ticketController = require('./controllers/ticketController');
const pedidoController = require('./controllers/pedidoController');


//As requisições feita no controller e suas respostas irão para o routes
const routes = express.Router();

//ROTAS E REQUISIÇÕES DA TABELA PRODUTO
routes.get('/produtos', produtoController.getAll); // GET PRODUTOS
routes.post('/produtos', produtoController.create); // POST PRODUTOS
routes.put('/produtos/:id', produtoController.update); //PUT PRODUTOS
routes.delete('/produtos/:id', produtoController.delete);//DELETE PRODUTOS



//ROTAS E REQUISIÇÕES DA TABELA INGRESSO
routes.get('/ingresso/:id', ticketController.getById); // GET INGRESSO
routes.get('/ingresso', ticketController.getAll); // GET INGRESSO
routes.post('/ingresso', ticketController.create); // POST INGRESSO
routes.put('/ingresso/:id', ticketController.update); //PUT INGRESSO
routes.delete('/ingresso/:id', ticketController.delete);//DELETE INGRESSO



//ROTAS E REQUISIÇÕES DA TABELA PEDIDOS
routes.get('/pedido_ingresso', pedidoController.getAll); // GET INGRESSO
routes.post('/pedido_ingresso', pedidoController.create); // POST INGRESSO
routes.put('/pedido_ingresso/:id', pedidoController.update); //PUT INGRESSO
routes.delete('/pedido_ingresso/:id', pedidoController.delete);//DELETE INGRESSO

routes.get('/pedido_ingresso/count/:id_ingresso', ticketController.getCount); // GET INGRESSO



module.exports = routes;