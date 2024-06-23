
alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
let chute = prompt('Escolha um número entre 1 e 10');

if (chute == numeroSecreto) {
    console.log('Isso ai! Você descobriu o número secreto (5)');
}


//desafios de logica

//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

/*
let mensagem = prompt('Qual o dia da semana?', 'digite aqui sua resposta');

if (mensagem.toLocaleLowerCase() === 'sábado' || mensagem.toLocaleLowerCase() === 'domingo') {
    alert('Hoje é dia de descanso');
} else {
    alert('Hoje não é fim de semana');
}
    */

/*

//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let mensagem = Number(prompt('Digite um numero?', 'digite aqui sua resposta'));

if (mensagem > 0) {
    alert('Voce escolheu um numero positivo');
} else if (mensagem < 0) {
    alert('O numero escolhido e negativo!')
} else {
    alert('Voce escolheu um numero igual a 0');
};

*/

//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

/*
let mensagem = Number(prompt('Digite a quantidade de pontos que possui', 'digite aqui'));

if (mensagem >= 100) {
    alert('Parabéns, você venceu!');
} else {
    alert('continue tentado!');
}
*/

//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
/*
const nomeUsuario = 'Mario';
const saldoConta = 1000;

const mensagem = `Ola, ${nomeUsuario}! O seu saldo: ${saldoConta}`;

console.log(mensagem);
*/

//peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

/*
let mensagem = prompt('Ola, insira o seu nome.');

if (typeof mensagem === 'string') {
    alert(`Ola, ${mensagem}!`);
} else {
    alert('Voce tem que digitar o seu nome');
}

*/
