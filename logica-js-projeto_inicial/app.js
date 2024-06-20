alert('Bem-vindo ao jogo do número secreto!');

function jogoDoChute() {

let numeroSecreto = 5;
let stringVazia = '';

let chute = prompt('Escolha um número entre 1 e 30', 'Digite aqui');

let chutePergunta = Number.isInteger(chute);

if (numeroSecreto === chutePergunta) {
    alert('Você acertou!');
} else if (numeroSecreto !== chutePergunta || chutePergunta == stringVazia) {
    alert('Você colocou um número inválido ou uma letra ou espaço vazio'); 
    jogoDoChute();  
} else if (chutePergunta === null) {
    alert('Você saiu!');
};

};

jogoDoChute();