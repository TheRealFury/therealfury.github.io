var ayushLogo;
var logo;
function preLoad(){
  ayushLogo = loadImage("AyushLogo.png");
}
function setup(){
  createCanvas(displayWidth,displayHeight);
  logo = createSprite(200,200,10,10);
}
function draw(){
  background(220);
  drawSprites();
}
