
alert('Bem-vindo ao jogo do número secreto!');


let numeroSecreto = 5;
let stringVazia = '';

let chute = prompt('Escolha um número entre 1 e 30', 'Digite aqui');


if (numeroSecreto == chute) {
    alert(`Você acertou! número secreto: ${numeroSecreto}`);
} else {
    alert('Você errou o número!')
};


