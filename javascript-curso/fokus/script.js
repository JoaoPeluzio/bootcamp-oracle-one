const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button'); //cria um array de lista de classes
const startPauseBt = document.querySelector('#start-pause');
const iniciarOuPausarImg = document.querySelector('#start-pause img')
const iniciarOuPausarBt = document.querySelector('#start-pause span');
const tempoNaTela = document.querySelector('#timer');

const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('/sons/luna-rise-part-one.mp3');
const audioPlay = new Audio('/sons/play.wav');
const audioPausa = new Audio('/sons/pause.mp3');
const audioTempoFinalizado = new Audio('/sons/beep.mp3');

let tempoDecorridoEmSegundos = 1500;
let intervalodId = null;


musica.loop = true;
musicaFocoInput.addEventListener('change', () => {
  if(musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
});
focoBt.addEventListener('click', () => {
  tempoDecorridoEmSegundos = 1500;
  alterarContexto('foco');
  focoBt.classList.add('active');
});

curtoBt.addEventListener('click', () => {
  tempoDecorridoEmSegundos = 300;
  alterarContexto('descanso-curto');
  curtoBt.classList.add('active');
});

longoBt.addEventListener('click', () => {
  tempoDecorridoEmSegundos = 900;
  alterarContexto('descanso-longo');
  longoBt.classList.add('active');
});

function alterarContexto(contexto) {
  mostrarTempo();
 botoes.forEach(function (contexto) {
   contexto.classList.remove('active');
 }); //remove as classes do array de lista

  html.setAttribute('data-contexto', contexto);
  banner.setAttribute('src', `/imagens/${contexto}.png`);

  switch (contexto) {
    case 'foco':
      titulo.innerHTML = `Otimize sua produtividade,<br><strong class="app__title-strong">mergulhe no que importa.</strong>`;
      break;
      
    case 'descanso-curto':
      titulo.innerHTML = `Que tal dar uma respirada?<br><strong class="app__title-strong">Faça uma pausa curta!</strong>`;
      break;
      
    case 'descanso-longo':
      titulo.innerHTML = `Hora de voltar à superfície.<br><strong class="app__title-strong">Faça uma pausa longa!</strong>`;
      break;
      
    default:
      break;
  }

}

const contagemRegressiva = () => {
  if(tempoDecorridoEmSegundos <= 0) {
    audioTempoFinalizado.play(); //audio executa quando cronometro zera
    alert('Tempo esgotado!');
    zerar();
    return;
  }
  tempoDecorridoEmSegundos -= 1;
  mostrarTempo();
}

startPauseBt.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {

  if(intervalodId) {
    audioPausa.play(); //audio executa quando cronometro inicia
    iniciarOuPausarImg.src = '/imagens/play_arrow.png';
    zerar();
    return;
  }
  audioPlay.play(); //audio executa quando cronometro para
  iniciarOuPausarImg.src = '/imagens/pause.png';
  intervalodId = setInterval(contagemRegressiva, 1000);
  iniciarOuPausarBt.textContent = 'Pausar';
};

function zerar() {
  clearInterval(intervalodId);
  iniciarOuPausarBt.textContent = 'Começar';
  intervalodId = null;
};

function mostrarTempo() {
  const tempo = new Date(tempoDecorridoEmSegundos * 1000);
  const tempoFormatado = tempo.toLocaleTimeString('pt-br', {minute: '2-digit', second: '2-digit'});
  tempoNaTela.innerHTML = `${tempoFormatado}`;
}

mostrarTempo();