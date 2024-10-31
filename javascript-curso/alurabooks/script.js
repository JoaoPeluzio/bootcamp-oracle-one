async function buscaEndereco(cep) {

    const mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = '';
    
    try {
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    
        const consultaCEPbinaryToJson = await consultaCEP.json(); //convertemos o binario que vem da API para json

        if(consultaCEPbinaryToJson.erro) {
            throw new Error(`Não foi possível buscar o endereço. Código de status: ${consultaCEPbinaryToJson.status}`);
        } //fazemos o tratamento do erro, caso nao consiga encontrar o que foi pedido.

        const cidade = document.getElementById('cidade');
        const logradouro = document.getElementById('endereco');
        const estado = document.getElementById('estado');

        cidade.value = consultaCEPbinaryToJson.localidade;
        logradouro.value = consultaCEPbinaryToJson.logradouro;
        estado.value = consultaCEPbinaryToJson.uf;
        
        console.log('Endereço:', consultaCEPbinaryToJson);

        return consultaCEPbinaryToJson; //retorna o endereço caso tenha sido encontrado.
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP invalido!</p>`
        console.log('Não foi possível buscar o endereço: ' + erro);
        return;
    }
}

//pegando o cep via campo cep

const cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value));




