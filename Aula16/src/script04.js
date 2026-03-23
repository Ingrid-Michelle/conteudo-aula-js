// Exemplo de animação
function animacao() {
  let id = null;
  const elemento = document.querySelector('#animacao');
  let posicao = 0;

  clearInterval(id);
  id = setInterval(frame, 10);

  function frame() {
    if (posicao == 300) {
      clearInterval(id);
    } else {
      posicao = posicao + 1;
      elemento.style.top = posicao + 'px';
      elemento.style.left = posicao + 'px';
      elemento.style.right = posicao + 'px';
      elemento.style.bottom = posicao + 'px';
    }
  }
}

animacao();