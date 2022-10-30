const cartao = document.getElementsByClassName('cartao');
const btnDir = document.getElementById('btnDir');
const btnEsq = document.getElementById('btnEsq');
var cartaoAtual = 0;

  btnDir.addEventListener('click', () => {
    if(cartaoAtual === cartao.length -1) return;

    let documentSelecionado = document.querySelector('.selecionado');
    documentSelecionado.classList.remove('selecionado');
    cartaoAtual++;
    cartao[cartaoAtual].classList.add('selecionado')
  });


  btnEsq.addEventListener('click', () => {
    if(cartaoAtual === 0) return;

     let documentSelecionado = document.querySelector('.selecionado');
    documentSelecionado.classList.remove('selecionado');
    cartaoAtual--;
    cartao[cartaoAtual].classList.add('selecionado')
  });
 
  
  