async function buscaEndereco(cep) {
    
    try {
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    
        const consultaCEPbinaryToJson = await consultaCEP.json(); //convertemos o binario que vem da API para json

        if(consultaCEPbinaryToJson.erro) {
            throw new Error(`Não foi possível buscar o endereço. Código de status: ${consultaCEPbinaryToJson.status}`);
        } //fazemos o tratamento do erro, caso nao consiga encontrar o que foi pedido.
        
        console.log('Endereço:', consultaCEPbinaryToJson);

        return consultaCEPbinaryToJson; //retorna o endereço caso tenha sido encontrado.
    } catch (erro) {
        console.log('Não foi possível buscar o endereço: ' + erro);
        return;
    }
}

buscaEndereco('26383060');
