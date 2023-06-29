//código do ator

let xator = 90;
let yator = 364;
let colisao = false;
let pontos = 0;


function mostraAtor(){
  image(imagemDoAtor, xator, yator, 35, 35);
}

function MovimentarAtor(){
  if (keyIsDown(UP_ARROW)){
    yator -= 3
  }
    if (keyIsDown(DOWN_ARROW)){
      if(podesemovimentar()){
    yator += 3
      }
  }
      if (keyIsDown(LEFT_ARROW)){
    xator -= 3
  }
      if (keyIsDown(RIGHT_ARROW)){
    xator += 3
  }
}

function verificacolisao(){
  // collideRectRect(x, y, width, height, x2, y2, width2, height2 )
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    colisao =  collideRectRect(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xator, yator, 35, 35 )
  	if (colisao){
     	colidiu();
      		SomColisao.play(0,1,0.3)
      		if(PontosMaiorQueZero()){
      			pontos -= 1
      }
    }
  }
}

function colidiu (){
  yator = 364
  xator = 90
}

function incluiPontos(){
  textAlign (CENTER)
  fill (color(255, 215, 0))
  textSize (25)
  text(pontos, width / 5, 27)
}

function MarcaPonto(){
  if (yator < 15 ){
    pontos +=1;
    SomPontos.play(0,1,0.3)
    colidiu();
  }
  
}

function PontosMaiorQueZero(){
  return pontos > 0

}

function podesemovimentar(){
  return yator <364;
}