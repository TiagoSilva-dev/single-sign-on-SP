// Importa o módulo express
const express = require('express');

// Cria uma instância do aplicativo express
const app = express();

// Importa as rotas definidas no arquivo routes.js
const routes = require('./routes');

// Adiciona as rotas ao aplicativo
app.use('/', routes);

// Inicia o servidor na porta 80 e exibe uma mensagem de sucesso
app.listen(80, () => {
  console.log('Servidor iniciado na porta 80');
});
