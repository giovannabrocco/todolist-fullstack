
const app = require('./app');

//process.env
// injetar variáveis do env neste ambiente

require('dotenv').config();

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Server running or port ${PORT}`));
// coloca função para ter retorno se está funcionando certinho