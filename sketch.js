
var score=0;
var player;
var playerImg;
var spaceimg;
var bg1,bg;
var spaceship;
var spaceshipGroup;
var bullet,bulletGroup,bulletImg;
var score = 0;
var bulletImg;
var  rock,rockImg,rockGroup;

function preload() {
 spaceimg = loadImage("spaceship1.png");
 bg1= loadImage("background.jpg");
 playerImg = loadImage("jet.png");
bulletImg= loadImage("bulleet1.png");
rockImg = loadImage("rock.png")
}

function setup() {
  createCanvas(1000,500);

 bg = createSprite(500,250)
  bg.addImage(bg1);
  bg.velocityY = 0.5

  player= createSprite(500,400,10,10)
  player.addImage(playerImg)
  player.scale = 0.21;

  spaceshipGroup = new Group();
  bulletGroup = new Group();
  rockGroup = new Group();
 
  

 
}

function draw() {
  background("green");

  
  
if (keyDown (LEFT_ARROW)&& player.x>=50){
  player.x = player.x-5;
}

if (keyDown (RIGHT_ARROW)&& player.x<=950){
  player.x = player.x+5;
}

if(keyDown ("space")){
  spawnBullets();
}

  if(bg.y >= 400){
    bg.y = 250
  }
  spawnSpaceship();
  spawnRock();
  moveRocks();

  destroySpaceship();

  drawSprites()
  fill ("white")
  textSize(20)
  text(score,800,100);

  
}
 function destroySpaceship() {
 bulletGroup.overlap(spaceshipGroup, function(collector, collected) {
   score = score+1
   
   collected.remove();
   collector.remove();
  });

}
function moveRocks() {
  bulletGroup.overlap(rockGroup, function(collector, collected) {
    
   rockGroup.setVelocityXEach(random(-3,3))
   
   });
 
 }
function spawnSpaceship(){
  if(frameCount %200===0){
    spaceship = createSprite(random(100,900),10,50,50);
    spaceship.addImage(spaceimg);
    spaceship.velocityY = 0.5;
    spaceship.velocityX= random(-0.5,0.5);
    spaceship.scale = 0.1;
    spaceship.lifetime= 1000;
    spaceshipGroup.add(spaceship);
  }
}
function spawnBullets(){
  bullet = createSprite(player.x-7,player.y,2,10);
  //bullet.x = player.x-20
  bullet.addImage(bulletImg)
  bullet.scale = 0.06
  
  bullet.velocityY = -2;
  bullet.lifetime = 250;
  bulletGroup.add(bullet);
}

function spawnRock(){
  if(frameCount %500===0){
    rock = createSprite(random(100,900),10,50,50);
    rock.addImage(rockImg);
    rock.velocityY = 0.8;
    
   rock.scale = 0.1;
    rock.lifetime= 2000;
    rockGroup.add(rock);
  }
}