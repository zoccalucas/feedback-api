# 🚀 NLW6

Projeto realizado através da 5° edição da NLW (Next Level Week), promovido pela Rocketseat.

## 👨‍💻 Projeto:

API de uma plataforma para promover o reconhecimento entre companheiros de equipe, através de elogios/feedbacks.
Permite cadastrar usuários comuns e usuários administradores, tags e elogios entre usuários. Também, autentica o usuário através do token JWT para verificar a permissão de acesso às rotas específicas.


Nesta API é possível realizar as seguintes funções:

- Cadastrar usuários;
- Cadastrar tags de elogios (somente adm);
- Cadastrar elogios;
- Listar os usuário;
- Listar as tags de elogios;
- Listar os elogios por usuário.

Autenticação:
- Autenticação de usuário a partir de um token JWT;
- Validação de login do usuário nas rotas necessárias.

## ⚙ Tecnologias utilizadas:

Para a criação desta API, foram usadas às seguintes dependências:

- [Express](https://expressjs.com/pt-br/);
- [TypeScript](https://www.typescriptlang.org/);
- [TypeORM](https://typeorm.io/#/);
- [SQLite](https://www.sqlite.org/index.html);
- [JSONWebToken](https://github.com/auth0/node-jsonwebtoken#readme)

Foi instalado e configurado o [Prettier](https://prettier.io/) para manter o código limpo e padronizado.

## 📁 Como executar o projeto:

1. Instale o [Yarn](https://yarnpkg.com/);
2. Instale o [NodeJs](https://nodejs.org/en/);
3. Clone o repositório;
4. Acesse a pasta do projeto e execute o comando `yarn` para instalar todas às dependências;
5. Rode `yarn typeorm migration:run` para criar as tabelas do banco de dados;
6. Assim que a instalação terminar, digite o comando `yarn dev`; 
  *OBS: A API estará rodando na porta 3333 (caso você não tenha setado uma variável de ambiente).*
