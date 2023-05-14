# Documentação da API

Esta é a documentação da API do sistema de autenticação SAML.

## Visão Geral

A API utiliza o protocolo SAML para autenticação e autorização de usuários. O sistema funciona como um Service Provider (SP) que se comunica com um Identity Provider (IdP) para autenticar usuários e obter informações de autorização.

## Endpoints

### /metadata

Este endpoint retorna o metadata do service provider em formato XML. É utilizado para que o Identity Provider possa se comunicar com o Service Provider.

#### GET

Retorna o metadata do service provider em formato XML.

Exemplo de requisição:

```
GET /metadata HTTP/1.1
Host: localhost:80
```

Exemplo de resposta:

```
HTTP/1.1 200 OK
Content-Type: text/xml

<md:EntityDescriptor xmlns:md="urn:oasis:names:tc:SAML:2.0:metadata" entityID="https://localhost:80">
  ...
</md:EntityDescriptor>
```