//todos os arquivos que lidam com o banco de dados fiquem dentro dessa models

//configurar conexão com o mysql

const mysql = require('mysql2/promise');
// utilizar versão mais moderna

require('dotenv').config();

// vai criar uma lista de conexões, vão ser inseridas alguma configurações
const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB

});
//


//exportar variável
module.exports = connection;