const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/cervejas');
const port = 3000;
const app = express();


app.use(express.static('public'));

app.use(bodyParser.json());
app.use('/cervejas', routes);

app.listen(port, () => {
    console.log('Servidor rodando na porta ' + port);
});
