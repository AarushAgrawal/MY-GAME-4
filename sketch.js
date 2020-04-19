var score = 0;
var zombieGroup,bulletGroup;
var gameState = 0;
//var zombies,bullet;

function preload() {
   buildingImg = loadImage("sprites/background.jpg");
   zombiesImg = loadImage("sprites/zombie.png");
   manImg = loadImage("sprites/man.png");
   bulletImg = loadImage("sprites/bullet.png");
   humanImg = loadImage("sprites/human.png");
}

function setup() {
  createCanvas(1200,600);
  building = createSprite(100,400,100,400);
 
 building.addImage("building",buildingImg);
 building.scale = 2;

  zombieGroup = new Group();
  bulletGroup = new Group();
  humanGroup = new Group();

 man = createSprite(50,540,30,70);
 man.addImage("man",manImg);  
 
 ground = createSprite(700,450,1000,20);
}

function draw() {
  background(0); 


        noStroke();
        textSize(35)
        fill("black")
        text("Score  " + score, 400, 50)
/*
  if(bulletGroup.isTouching(zombies)){
    gameState = 1;
  }
*/

 spawnZombies(); 
 spawnZombies1(); 

 spawnHumans();
 spawnHumans1();

  for(var i = 0 ; i< (zombieGroup).length ;i++){
 var temp = (zombieGroup).get(i) ;

if (temp.collide(bulletGroup)) {
    temp.destroy();
    bulletGroup.destroyEach()
    score = score + 0;
  }  
}
  for(var i = 0 ; i< (humanGroup).length ;i++){
 var temp1 = (humanGroup).get(i) ;

if (temp1.collide(bulletGroup)) {
    temp1.destroy();
    bulletGroup.destroyEach()
   // score = score + 0;
  }
    
}
/*
  if(gameState === 1){
    zombies.destroy();
  }
  */  
 if(keyDown("space")){
   spawnBullets();
 }
  
  drawSprites();
}

 function spawnZombies(){
   if(World.frameCount % 200 === 0) {
       var zombies = createSprite(1150,550,10,50);
         zombies.addImage("zombie",zombiesImg);
         zombies.scale = 0.2;
         zombies.velocityX = -2;
         zombies.lifetime = 540;
         drawSprites();
          zombieGroup.add(zombies);
     }
}

function spawnBullets(){
   var bullet = createSprite(100,530,10,5);
        bullet.addImage("bullet",bulletImg);
        bullet.scale = 0.1;
         bullet.velocityX = 5;
         bullet.lifetime = 250;
          bulletGroup.add(bullet);
}

 function spawnHumans(){
   if(World.frameCount % 150 === 0) {
       var humans = createSprite(1150,550,10,50);
         humans.addImage("human",humanImg);
         humans.scale = 0.4;
         humans.velocityX = -2;
         humans.lifetime = 540;
         drawSprites();
         humanGroup.add(humans);
     }
}

function spawnZombies1(){
   if(World.frameCount % 200 === 0) {
        zombies = createSprite(1150,400,10,50);
         zombies.addImage("zombie",zombiesImg);
         zombies.scale = 0.2;
         zombies.velocityX = -2;
         zombies.lifetime = 540;
         drawSprites();
          zombieGroup.add(zombies);
   }
}

 function spawnHumans1(){
   if(World.frameCount % 150 === 0) {
       var humans = createSprite(1150,400,10,50);
         humans.addImage("human",humanImg);
         humans.scale = 0.4;
         humans.velocityX = -2;
         humans.lifetime = 540;
         drawSprites();
         humanGroup.add(humans);
     }
} 