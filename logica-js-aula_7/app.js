let numeroAleatorio = gerarNumeroAleatorio();
function exibirTextoNaTela (tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;

}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 1000');

function verificarChute () {
  let chute = document.querySelector('input').value;

  console.log(chute == numeroAleatorio);
};

function gerarNumeroAleatorio () {
  return parseInt(Math.random() * 1000 + 1);
}