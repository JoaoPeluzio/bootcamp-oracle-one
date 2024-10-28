const pegaCep = fetch('https://viacep.com.br/ws/01001000/json/')
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

//then ocorre quando a promessa retorna resolvida
//catch ocorre quando a promessa é rejeitada 