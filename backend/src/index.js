const express = require('express');
const cors =require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


/**
 * Rota / Recurso
 */

 /**
  * Método HTTP
  * 
  * GET: Buscar uma informação do Back-end
  * POST: Criar uma informação no Back-end
  * PUT: Alterar informação no back-end
  * DELETE: Deletar informação no back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após o simbolo de interrogação "?" e usado para filtros paginação
   * Route Params: Parâmetros utilizados para identificar recursos 
   * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Driver: SELECT * FROM Users
     * Query Builder: table('users').select('*').where()
     */




