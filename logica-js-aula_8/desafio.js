//DESAFIO

//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function imc(altura, peso) {
    let imc = peso / (altura * altura);
    return imc;
}
console.log('calcula imc');
console.log(imc(1.80, 70).toFixed(2));

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function fatorial(numero) {
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}

console.log('fatorial');
console.log(fatorial(5));

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function dolar(valor) {
    let dolar = valor * 4.80;
    return dolar;
}
console.log('cota o dolar');
console.log(dolar(100));


//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function area(altura, largura) {
    let area = altura * largura;
    return area;
}
console.log('calcula perimetro');
console.log(area(10, 20));

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function circulo(raio) {
    let area = 3.14 * (raio * raio);
    let perimetro = 2 * 3.14 * raio;
    return area, perimetro;
}

console.log('calcula raio');
console.log(circulo(10).toFixed(2));

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

console.log('tabuada');
tabuada(10);