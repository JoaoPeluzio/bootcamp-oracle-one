async function buscaEndereco() {
    
    const consultaCEP = await fetch('https://viacep.com.br/ws/26383060/json/')

    const consultaCepConvertida = await consultaCEP.json();

    console.log(consultaCepConvertida);
}

buscaEndereco();


//await faz toda a conversão para json;

//Antigo código (sem async/await)
/*
.then(resposta => resposta.json())
.then(r => {

        if (r.erro) {
           throw Error('Esse cep não eiste!') 
        } else {
            console.log(r);
        }
    console.log(r)})
.catch(erro => console.log(erro))
.finally(mensagem => console.log('Processamento concluído!'));

console.log(pegaCep);
*/

//then ocorre quando a promessa retorna resolvida
//catch ocorre quando a promessa é rejeitada 

