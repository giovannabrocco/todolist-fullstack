const connection = require('./connection');


const getAll = async () => {
    const tasks = await connection.execute('SELECT * FROM tasks');
    // esta função vai realizar uma query sql e retorna estes dados
    // é uma função assíncrona
    return tasks;
};
//listar todas as tasks que estão no banco de dados




module.exports = {
    getAll
};