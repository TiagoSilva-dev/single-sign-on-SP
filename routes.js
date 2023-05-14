// Importa o módulo express e cria um objeto Router
const express = require('express');
const router = express.Router();

// Importa o módulo samlify
const saml = require('./samlify');

// Define a rota '/metadata'
router.get('/metadata', (req, res) => {
  // Define o cabeçalho do tipo de conteúdo da resposta como 'text/xml'
  res.header('Content-Type', 'text/xml');
  // Envia o metadado do service provider como resposta
  res.send(saml.sp.getMetadata());
});

// Exporta o objeto Router para que possa ser utilizado em outras partes do aplicativo
module.exports = router;
