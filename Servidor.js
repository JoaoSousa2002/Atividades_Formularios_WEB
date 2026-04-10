const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.post('/calcular-nota', (req, res) => {
    const nome = req.body.nomeAluno;
    const nota01 = Number(req.body.nota01);
    const nota02 = Number(req.body.nota02);
    const media = (nota01 + nota02) / 2;

    if (media >= 6) {
        resposta = 'Aprovado';
    } else if (media < 6 && media >= 2) {
        resposta = 'Exame final';
    } else {
        resposta = 'Reprovado';
    }

    res.send(
        `<h1>Resultado da Avaliação</h1>
        <p>Nome do(a) aluno(a): ${nome}</p>
        <p>Nota 1: ${nota01}</p>
        <p>Nota 2: ${nota02}</p>
        <p>Média: ${media}</p>
        <p>Status: ${resposta}</p`
    );
});

// Iniciar o servidor
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));