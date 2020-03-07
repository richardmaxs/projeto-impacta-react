const express = require('express');

module.exports = function(server){
    const router =  express.Router();
    server.use('/api', router);

    const cursos = require('../api/cursos/service');
    const contato = require('../api/contatos/service');

    cursos.register(router, '/cursos');
    contato.register(router, '/contatos');
}