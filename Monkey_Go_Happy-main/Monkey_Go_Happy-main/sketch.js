var backImage,backgr;
var player, player_running;
var ground,ground_img;

var END =0;
var PLAY =1;
var gameState = PLAY;

var obstacle
var banana 

function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  obstacle = loadImage("stone.png")
  banana = loadImage("banana.png")
}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;
  
  obstacleGroup = new Group()
  FoodGroup = new Group()
}

function draw() { 
  background(0);

  if(gameState===PLAY){
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
    if(keyDown("space") ) {
      player.velocityY = -12;
    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);

  }

  obstacles()
  spawnFood()

  drawSprites();
}

function obstacles() {

  if (frameCount % 60 === 0) {
    obstac = createSprite(600,330,40,10);
    obstac.addImage("obstacle", obstacle);
    obstac.scale = 0.1;
    obstac.velocityX = -3;
    
     //assign lifetime to the variable
    obstac.lifetime = 200;
    obstacleGroup.add(obstac)
    //adjust the depth
    obstacle.depth = player.depth;
    player.depth = player.depth + 1;
  }
  
}



function spawnFood() {

  if (frameCount % 60 === 0) {
    bananas = createSprite(600,150,40,10);
    bananas.addImage("banana", banana);
    bananas.scale = 0.1;
    bananas.velocityX = -3;
    
     //assign lifetime to the variable
    bananas.lifetime = 200;
    FoodGroup.add(bananas)
    //adjust the depth
    bananas.depth = player.depth;
    player.depth = player.depth + 1;
  }
}