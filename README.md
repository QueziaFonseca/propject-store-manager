# Boas-vindas ao repositório do Projeto Store Manager!


  ## 👨‍💻 O que foi desenvolvido

  Neste projeto foi desenvolvida uma API RESTful.

  A API construída é um sistema de gerenciamento de vendas na qual é possível cadastrar, visualizar, deletar e atualizar produtos e atualizar e cadastrar vendas.

  Foram escritos testes unitários que cobrem cerca de 40% das camadas da sua aplicação.

  a API deve segue o padrão RESTful.
  
  Para a gestão de dados foi utilizado o banco MySQL.
  




## Informaçõe sobre criação dos Testes Unitários

### Foram utilizados o **mocha**, **chai** e **sinon** para escrever os testes;

- Os testes das camadas da APi (`models`, `services` e `controllers`) estão contidos na pasta `test/unit`. Os arquivos de testes referentes a cada camada estão contidos nos arquivos correspondentes à  cada camada, segundo o esquema abaixo:
```tree
.
├─ ...
├─ test
│   └─ unit
|       ├─ controllers
│            ├─ productsControllers.js
│            └─ salesControllers.js
|       ├─ services
│            ├─ productsServices.js
│            └─ salesServices.js
|       └─ models
│            ├─ productsModels.js
│            └─ salesModels.js
└─ ...
```

-Foram escritos testes unitários que cobrem cerca de 40% das camadas da sua aplicação

- Os testes da `model` fazeem um mock do banco de dados, logo não dependem do serviço do `MYSQL`

-  Para rodar os testes utilize `npm run test:mocha`; (após instalar as dependencias do projeto com `npm install` conforme consta abaixo:)




## Para executar o projeto siga as instruções abaixo:

  1. Clone o repositório

  - `git clone git@github.com:tryber/sd-017-store-manager.git`;

  - Entre na pasta do repositório que você acabou de clonar:
    - `cd sd-017-store-manager`

  2. Instale as dependências [**Caso existam**]

  - `npm install`
