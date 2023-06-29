
function setup() {
    createCanvas(500, 400);
    Somtrilha.loop(0,1,0.1);
  }
  
  function draw() {
    background(imagemDaEstrada);
    mostraAtor();
    mostraCarro();
    movimentaCarro();
    MovimentarAtor();
    RespawnCarro();
    passouTodaATela();
    verificacolisao();
    incluiPontos();
    MarcaPonto();
    PontosMaiorQueZero();
    podesemovimentar();
  }
  