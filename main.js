//Criar uma referência para tela
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');


//Dê altura e largura específicas para a imagem do carro

car2.pngWidth= 75;
car2.pngHeight= 100;

backgroundImage = "parkingLot.jpg";
car2.pngImage = "car2.png";

//Defina a posição inicial para uma imagem de carro.
car2.pngX=5;
car2.png=225;

function add(){
	backgroundImgTag=new Image();
	backgroundImgTag.onload = uploadbackground;
	backgroundImgTag.src = backgroundImage
	
	roverImgTag=new Image();
	roverImgTag.onload = uploadcar2.png;
		roverImgTag.src = car2.pngImage}

function uploadBackground() {
	//Defina a função ‘uploadBackground’
	ctx.drawImage(backgroundImgTag,0,0,canvas.width,canvas.height)
}

function uploadGreenCar() {
	//Defina a função ‘uploadGreenCar’.

	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Definir função para mover o carro para cima
}

function down()
{
	//Definir função para mover o carro para baixo
}

function left()
{
	//Definir função para mover o carro para o lado esquerdo
}

function right()
{
	//Definir função para mover o lado direito do carro
}
