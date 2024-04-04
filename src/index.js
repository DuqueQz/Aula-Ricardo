const express = require('express');
const app = express();
const port = 3000;
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());
require('./services/swagger')

require('./routes')(app)
app.get('/', (req,res) => {
    res.cookie('meuCookie2024', 'abcde');
    res.send('Hello World!'); });

app.use('/v1/docs', express.static('src/views'))
app.use('/docs/swagger.yaml', express.static('src/docs/swagger.yaml'))

app.listen(port, ()=> {
    console.log(`Aplicação rodando na porta ${port}`);
});


