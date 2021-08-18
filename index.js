//No inicio temos que utilizar os seguintes comandos:
// npm init -y
//npm install express
//npm i -D nodemon 

const express = require('express'); //importa express
const app = express(); // informa que neste app vamos utilizar o express

const port = 3000; //crio uma constante com nome port e ela recebe o valor 3000

const games = [ //Crio uma constante 'lista' com o nome games e 4 itens dentro, a mesma começa com o indice 0
    'Pokémon Go',
    'Mobile Legends Bang Bang',
    'Ragnarok',
    'Perfect World'
];
const mngInicio = [
    'Bem vindo',
    'Bem vindo a nosso site de Jogos',
    'Nosso servidor de Jogos!',
    'Quem é você? Sai do meu servidor.'
];
function randomMinMax(min, max) {
    return Math.floor(Math.random() * (max - min )) + min;
};
function frase(num){
    return mngInicio[num];
};
console.log(frase(randomMinMax(0,3)));

app.get('/', (req, res) =>{ //criamos a rota '/' inicial e vamos enviar uma mensagem inicial.
    res.send(`<h1>${frase(randomMinMax(0,3))}</h1>`);
});

app.get('/games', (req, res) =>{ //criamos a rota /games e dentro dela a lista de jogos
    res.send(games);
});

app.get('/games/:id', (req,res) => { //crio a rota games + o id que será escolido pelo usuario
    const id = req.params.id -1; // coloco um -1 para que fique mas interativo 
    const game = games[id];
    res.send(game);
});

games.forEach(function (item, indice){
    console.log(indice, item);
});

app.listen(port, () => {
    console.info(`Nosso app esta rodando em: http://localhost:${port}/`); //crio uma mensagem no console para confirmar que meu app esta rodando.
});

//Roda com nodemon index.js