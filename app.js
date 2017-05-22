console.log("WORKINGGG")
var canvas = document.querySelector('#game');
console.log(canvas)
var game= canvas.getContext('2d');

var x=0;
var y=0;
var yspeed=0;
var xspeed=0;
var gravity= 1;
var height= 50;
var ground= canvas.height - height;


var background= new Image();
background.src="https://s-media-cache-ak0.pinimg.com/originals/07/7a/d3/077ad39006c3a5ff25e85859356a1628.jpg";

background.onload=function(){
  game.drawImage(background, canvas.width, canvas.height);

}

var player= new Image();
player.src="http://img12.deviantart.net/efa0/i/2012/173/8/e/character_with_transparent_background_by_whispercookie-d54hgpz.png";
var imageRation=1;
player.onload=function(){
  imageRation=player.width / player.height;
}



function draw(){

  game.drawImage(background,0,0,canvas.width,canvas.height);


  x= x+ xspeed;
  y=y + yspeed;
  yspeed= yspeed + gravity;

  if (y > ground){
    y= ground;
    yspeed=0;
  }

  game.drawImage(player, x, y, imageRation * height, height)



}


function update(){
}


var inputCheck= setInterval(update, 600)

var gameUpdate= setInterval(draw,60);

function startMove(event){
  if (event.keyCode== 37){
    xspeed= -5;
  }

  if (event.keyCode== 39){
    xspeed= 5;
  }
}

function stopMove(event){
if (event.keyCode==37 || event.keyCode==39){
  xspeed=0;
}
}

document.onkeydown= startMove;
document.onkeyup= stopMove;
