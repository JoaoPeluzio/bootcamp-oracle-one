//DESAFIO


//Criar uma função que exibe "Olá, mundo!" no console.

function mensagem(mensagem) {
    console.log(mensagem);
}

mensagem(`Olá! seja bem-vindo!`);

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console

function mensagem2 (nome) {
    console.log(`Olá, ${nome}!`)
}

mensagem2('João');


//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function numeroDobro(um) {
    console.log(um * 2);
}

numeroDobro(2);


//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media(numero1, numero2, quantidade) {
    console.log((numero1 + numero2) / quantidade)
}

media(10, 20, 2);

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function retornaMaior(numero1, numero2) {
    console.log(Math.max(numero1, numero2));
}

retornaMaior(10, 20);

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function multiplicador (numero1) {
    console.log(numero1 * numero1);
}

multiplicador(10);




