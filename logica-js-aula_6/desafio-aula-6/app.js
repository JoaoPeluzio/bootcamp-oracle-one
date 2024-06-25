//criar titulo usando queryselector no h1

let titutlo = document.querySelector('h1');
titutlo.innerHTML = 'Hora do desafio';

//fazer os botoes serem clicados e aparecer uam mensagem de clique no console

function clickConsole() {
  console.log('O botão foi clicado!');
};

//Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

function clickAlerta() {
  alert('Eu amo JS!');
}

//Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

function clickPrompt () {
  let perguntaCidade = prompt('Qual cidade do Brasil voce esta?');
  alert(`Estive em ${perguntaCidade} e lembrei de voce`);
}

//Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.

function clickSoma () {
  let numero1 = parseInt(prompt('diga um numero', 'digite aqui'));
  let numero2 = parseInt(prompt('digite outro numero', ' digite aqui'));
  let soma = numero1 + numero2;
  alert(`A soma dos numeros ${numero1} e ${numero2} vai dar a soma de ${soma}.`);
}