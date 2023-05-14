// Importa o módulo samlify e o módulo de sistema de arquivos do Node.js
const saml = require('samlify');
const fs = require('fs');

// Cria uma instância do service provider do SAML
const ServiceProvider = saml.ServiceProvider;

// Lê o arquivo XML que contém o metadata do service provider e configura o endpoint
const sp = ServiceProvider({
  metadata: fs.readFileSync('./xml/serviceProvider.xml')
});

// Exporta o objeto 'sp', que contém a instância do service provider configurado
module.exports = {
  sp,
};
