const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors({ origin: 'http://127.0.0.1:5500' }));
app.use(express.json());
app.use(express.static('public'));;

let resposta = ""
app.post('/calcular-nota', (req, res) => {
    const nota01 = Number(req.body.nota01)
    const nota02 = Number(req.body.nota02)
    const media = Number((nota01 + nota02) / 2);

    if (media >= 6) {
        resposta = 'Aprovado';
    } else if (media < 6 && media >= 2) {
        resposta = 'Exame final';
    } else {
        resposta = 'Reprovado';
    }


    res.json({
        media: media,
        status: resposta
    });

});

// Iniciar o servidor
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));