const express = require ('express')
const Usuario = require ('./controllers/usuarios.controller')
const Produto = require ('./controllers/produtos.controller')


const routes = express.Router();

//Rotas Usuario
routes.get('/api/usuarios', Usuario.index)
routes.post('/api/usuario',Usuario.create)
routes.get('/api/usuarios/:_id',Usuario.indexOne)
routes.delete('/api/usuarios/:_id',Usuario.delete)
routes.put('/api/usuarios/:_id',Usuario.update)

//Rotas Produtos
routes.get('/api/produtos', Produto.index)
routes.post('/api/produtos',Produto.create)
routes.get('/api/produtos/:_id',Produto.indexOne)
routes.delete('/api/produtos/:_id',Produto.delete)
routes.put('/api/produtos/:_id',Produto.update)


module.exports = routes
