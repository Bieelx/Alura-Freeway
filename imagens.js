// imagens e sons
let SomColisao;
let Somtrilha;
let SomPontos;


function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/Capivara.png");
  Carro = loadImage("imagens/carro-1.png");
  Carro2 = loadImage("imagens/carro-2.png");
  Carro3 = loadImage("imagens/carro-3.png");  
  imagemCarros = [Carro, Carro2, Carro3, Carro, Carro2, Carro3]
  
  	SomColisao = loadSound ("sons/colidiu.mp3");
  	Somtrilha = loadSound ("sons/trilha.mp3");
	SomPontos = loadSound ("sons/pontos.wav");
}

