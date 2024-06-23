
alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute;
let tentativas = 1;


while (chute != numeroSecreto) {
  chute = prompt("Escolha um numero entre 1 e 10");

  if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
  } else {
    if (chute > numeroSecreto) {
      alert(`O numero secreto e menor que ${chute}`);
    } else {
      alert(`O numero secreto e maior que ${chute}`);
    }
    //tentativas = tentativas + 1;
    tentativas++;
  }
}


//desafios

//crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
/*
let contador = 1;

while(contador <= 10) {
    console.log(contador);
    contador++;
}
*/


//Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
/*
let contador2 = 10;

while (contador2 >= 0) {
    console.log(contador2);
    contador2--;
}
*/

//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
/*
let contador3 = prompt('digite um numero');

while (contador3 >= 0) {
    console.log(contador3);
    contador3--;
}
*/


//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

/*
let numeroMaximo = prompt('digite um numero');
let contador4 = 0;

while (contador4 <= numeroMaximo) {
    console.log(contador4);
    contador4++;
}
*/


