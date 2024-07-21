function app() {
  const letras = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };

  const entradaUsuario = document.getElementById(
    "encriptador_form_input_textarea"
  );
  const saidaUsuario = document.getElementById("aside_resultado_texto");
  const botaoParaEncriptar = document.querySelector(".criptografar");
  const botaoParaDescriptografar = document.querySelector(".descriptografar");
  const divAside = document.querySelector(".esconder");
  const botaoCopiar = document.querySelector(".copiar_button");
  const cardMensagem = document.getElementById('cardMensagem');

  escondeBotaoCopiar(); 

  function capturaTexto() {
    entradaUsuario.addEventListener("input", (e) => {
      let texto = e.target.value;
      texto = texto.toLowerCase();
      texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      entradaUsuario.value = texto;
    });
  }

  capturaTexto();

  function capturaBotaoCriptografar() {
    botaoParaEncriptar.addEventListener("click", (e) => {
      e.preventDefault();
      e.target.value = botaoParaEncriptar;
      const texto = entradaUsuario.value;
      divAside.innerHTML = texto;

      criptografaTexto();
    });
  }

  capturaBotaoCriptografar();

  function capturaBotaoDescriptografar() {
    botaoParaDescriptografar.addEventListener("click", (e) => {
      e.preventDefault();
      e.target.value = botaoParaDescriptografar;
      const texto = entradaUsuario.value;
      divAside.innerHTML = texto;
    });
  }

  capturaBotaoDescriptografar();

  async function copiaTexto() {
    try {
      await navigator.clipboard.writeText(divAside.innerHTML);
      cardMensagem.classList.remove('hidden');
      setTimeout(() => {
        cardMensagem.classList.add('hidden');
      }, 3000); // Esconde o card após 3 segundos
    } catch (err) {
      console.error('Erro ao copiar texto: ', err);
      alert('Falha ao copiar texto');
    }
  }

  botaoCopiar.addEventListener('click', (e) => {
    e.preventDefault();
    copiaTexto();
  });

  function criptografaTexto() {
    let texto = entradaUsuario.value;
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
      if (letras[texto[i]]) {
        resultado += letras[texto[i]];
      } else {
        resultado += texto[i];
      }
    }
    divAside.innerHTML = resultado;
    mostraBotaoCopiar();
    escondeImagemAside();
  }

  function escondeBotaoCopiar() {
    botaoCopiar.classList.add("hidden");
  }

  function mostraBotaoCopiar() {
    botaoCopiar.classList.remove("hidden");
  }

  function escondeImagemAside () {
    divAside.classList.remove("aside_imagem_paragrafo");
  }
}

app();


