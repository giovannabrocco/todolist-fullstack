const express = require('express');
const tasksController = require('./controllers/taskController');
const router = express.Router ();
//Router é como uma mini-aplicação Express dentro de sua aplicação principal.
//Ele tem sua própria estrutura de rotas.
//Isto é útil para manter o código limpo e organizado

router.get('/tasks', tasksController.getAll);
// para melhorar organização, deixei as funções em controllers

module.exports = router;
