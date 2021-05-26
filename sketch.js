var background;
var redGroup;
var yellowGroup;
var greenGroup;
var blueGroup;
var bow;
var arrowGroup;
var selectBalloon;
var score=0;
var yellow;
var blue;
var green;
var red;
var arrow,ARROWIMG;

function preload(){
  YELLOW=loadImage("YELLOW.png");
  RED= loadImage ("RED.png"); 
  BLUE= loadImage ("BLUE.png");
  GREEN= loadImage ("GREEN.png");
  BOW= loadImage ("BOW.png");
  ARROWIMG= loadImage ("ARROW.png");
  BCG=loadImage("BCG.png");
}

 function setup() {
  createCanvas(400, 400);
  background=createSprite(200,50,400,400);
  background.addImage("Bcg",BCG);
  background.scale=2;
  bow=createSprite(370,200,10,10);
  bow.addImage("Bow",BOW);

     //making balloon and arrow groups
  arrowGroup= new Group();
  redGroup= new Group();
  blueGroup= new Group();
  greenGroup= new Group();
  yellowGroup= new Group();
   
}


function draw() {
  
  //creating background

  background.velocityX=-2;
   if (background.x < -10) {
    background.x = background.width/2;
   }
  
  //creating bow
  bow.y=World.mouseY;
  
    // making space shoot arrows
    if(keyDown("space")){
    arrowshoot();
  }
  

  
  
    //spawning balloons
    selectBalloon=Math.round(random(1,4));
  
  if (World.frameCount%100===0){
  switch(selectBalloon){
  case 1:spawnred();
    break;
  case 2:spawnyellow();
    break;
  case 3:spawnblue();
    break;
  case 4:spawngreen();
    break;
    default: break;
  }
  }
  
   if (arrowGroup.isTouching(redGroup)){
  redGroup.destroyEach();
  burst();
  }
  if (arrowGroup.isTouching(blueGroup)){
  blueGroup.destroyEach();
  burst();
  }
  if (arrowGroup.isTouching(yellowGroup)){
  yellowGroup.destroyEach();
  burst();
  }
  if (arrowGroup.isTouching(greenGroup)){
  greenGroup.destroyEach();
  burst();
  }
 
  
  drawSprites();
    fill("black");
 textSize(30);
 text ("SCORE: "+ score,220,40);
}

  

  

  
function arrowshoot(){
  var arrow = createSprite(360,100,5,10);
  arrow.addImage("Arrow",ARROWIMG);
  arrow.velocityX=-8;
  arrow.y =bow.y;  
  arrowGroup.add(arrow);
}

function burst(){
  score++;
  arrowGroup.destroyEach();
}

function spawnred(){
  red=createSprite(-2,Math.round(random(30,70)),10,10);
  red.addImage("Red",RED);
  red.lifetime=200;
  red.velocityX=2;
  redGroup.add(red);
  return red;
}

function spawnyellow(){
  yellow=createSprite(-2,Math.round(random(80,150)),10,10);
  yellow.addImage("Yellow",YELLOW);
  yellow.lifetime=200;
  yellow.velocityX=7;
  yellowGroup.add(yellow);
  return yellow;
}

function spawnblue(){ 
  blue=createSprite(-2,Math.round(random(160,220)),10,10);
  blue.addImage("Blue",BLUE);
  blue.lifetime=200;
  blue.velocityX=3;
  blueGroup.add(blue);
  return blue;
}

function spawngreen(){
  green=createSprite(-2,Math.round(random(230,270)),10,10);
  green.addImage("Green",GREEN);
  green.lifetime=200;
  green.velocityX=5;
  greenGroup.add(green);
  return green;
}
