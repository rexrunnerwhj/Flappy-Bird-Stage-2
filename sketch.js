var bg, bgImage;
var bird, birdImage;
var upperPillar, upperPillarImage, upperPillarGroup;
var lowerPillar, lowerPillarImage, lowerPillarGroup;

function preload() {
  bgImage = loadImage("Flappy Bird Background.png");
  birdImage = loadImage("Flappybird.png");
  upperPillarImage = loadImage("pipe1.png");
  lowerPillarImage = loadImage("pipe2.png");
}

 

function setup() {
  createCanvas(1363,760);
  bg = createSprite(681,380,1363,760);
  bg.addImage(bgImage);
  bg.scale = 3;
  bg.velocityX = -3; 

  bird = createSprite(660,380,20,20);
  bird.addImage(birdImage);
  bird.scale = 0.4;

  upperPillarGroup = new Group();
  lowerPillarGroup = new Group();
}

function draw() {
  background("black"); 
  
  if(bg.x<400){
    bg.x = 681;
    
  }
  drawSprites();
}

//write code here to spawn the pillars
function spawnClouds() {
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = Math.round(random(80,120));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    cloudsGroup.add(cloud);
  }
  
}