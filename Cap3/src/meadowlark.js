const express = require('express');//importa o express
const app = express();//torna a função express utilizavel toda vez
                    //que se utilizar a expressao app

const port = process.env.port || 3000;

app.get('/', (req, res) => {//entre '' é o endereco de rota. req de requisicao 
                            // do cliente e res de resposta do servidor
    res.type('text/plain');
    res.send('Meadowlark Travel');
})

app.get('/about', (req, res) => {
    res.type('text/plain');
    res.send('About Meadowlark Travel');
})

app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404-Not Found')
});

