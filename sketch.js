var fruitb,fruit1b,fruit2b,fruit3b,swordb,gameoverb,monster,monsterknifesound,diesound,monster2;
var fruitba,fruit1ba,fruit2ba,fruit3ba,swordba,gameoverba,monstera,knifesounda,diesounda,monster2a;

var PLAY=1;
var END=0;
var gamestate=1;

var score;


function preload(){
  fruitba=
  loadImage("fruit1.png");
  
fruit1ba=
  loadImage("fruit2.png");
               
fruit2ba=
  loadImage("fruit3.png");
  
fruit3ba=
  loadImage("fruit4.png");
  
swordba=
  loadImage("sword.png");
  
gameoverba=
  loadImage("gameover.png");  
  
monstera=
  loadImage("alien1.png");
  
knifesounda=
  loadSound("knifeSwooshSound.mp3");
  
diesounda=
  loadSound("gameover.mp3");
  
monster2a=
  loadImage("alien2.png")

}

function setup() {
createCanvas(400, 400);
  
  sword = createSprite(380,200,20,20);
  sword.addImage(swordba);
  sword.scale=0.5;
  
  fruitbGroup = new Group();
  fruit1bGroup = new Group();
  fruit2bGroup = new Group();
  fruit3bGroup = new Group();
  enemyGroup = new Group();
  enemy2Group = new Group();
  
  score=0;
   
}


  


function draw(){
  
 background("green");
  
 if(gamestate===PLAY) {
  if (sword.isTouching(fruitbGroup)){
  knifesounda.play();
  fruitbGroup.destroyEach();
  score = score+1;
  }
  
  
  if (sword.isTouching(fruit1bGroup)){
  knifesounda.play();
  fruit1bGroup.destroyEach();
  score = score+1;
  }
  
  if (sword.isTouching(fruit2bGroup)){
  knifesounda.play();
  fruit2bGroup.destroyEach();
  score = score+1;
  }
  
  if (sword.isTouching(fruit3bGroup)){
  knifesounda.play();
  fruit3bGroup.destroyEach();
  score = score+1;
  }
  
  
  sword.y=World.mouseY;
  sword.x=World.mouseX;
   
  spawnb1fruits();
  spawnb2fruits();
  spawnb3fruits();
  spawnb4fruits();
  spawnenemy();
  spawn2enemy();
 }
  if (score>4){ 
  fruitb . velocityX= 10;
  fruit1b. velocityX= 12;
  fruit2b. velocityX= 8;
  fruit3b. velocityX= 10;
  }
   
  if (score>10){
  monster.velocityX=-17;
  }
 
  
 
   
 
  if (enemyGroup.isTouching(sword)){
  gamestate=END;
  console.log(gamestate);
  sword.addImage(gameoverba);
  sword.x=200;
  sword.y=200;
  fruitbGroup.destroyEach();
  fruitbGroup.setVelocityXEach(0);
  fruit1bGroup.destroyEach();
  fruit1bGroup.setVelocityXEach(0);
  fruit2bGroup.destroyEach();
  fruit2bGroup.setVelocityXEach(0);
  fruit3bGroup.destroyEach();
  fruit3bGroup.setVelocityXEach(0);
  enemyGroup.destroyEach();
  diesounda.play();
  
  }
  
  
   
  drawSprites();
  
   fill("red");
  textFont("Showcard Gothic");
  text("Score: "+ score, 300,30);
}

function spawnb1fruits() {

  if (frameCount % 80 === 0) {

    fruitb = createSprite(-180, 60, 10, 10);
    fruitb.addImage(fruitba);
    fruitb.scale = 0.15;
    fruitb.velocityX = 5;
    fruitb.y = Math.round(random(375, 25));
    fruitb.lifetime = 280;
    fruitbGroup.add(fruitb);
   



  }
}

function spawnb2fruits() {
  if (frameCount % 80 === 0) {

    fruit1b = createSprite(-250, 60, 10, 10);
    fruit1b .addImage(fruit1ba );
    fruit1b .velocityX = 4;
    fruit1b .y = Math.round(random(375, 25));
    fruit1b .lifetime = 320;
    fruit1b.scale=0.15;
    fruit1bGroup.add(fruit1b);
    

  }
}

function spawnb3fruits() {

  if (frameCount % 80 === 0) {

    fruit2b = createSprite(-100,30,10,10);
    fruit2b .addImage(fruit2ba);
    fruit2b .scale = 0.15;
    fruit2b .velocityX = 6;
    fruit2b.y = Math.round(random(375, 25));
    fruit2b .lifetime = 240;
    fruit2bGroup.add(fruit2b );
    


  }
}

function spawnb4fruits() {

  if (frameCount % 80 === 0) {

    fruit3b = createSprite(-10, 60, 10, 10);
    fruit3b.addImage(fruit3ba);
    fruit3b.scale = 0.15;
    fruit3b.velocityX = 7;
    fruit3b.y = Math.round(random(375, 25));
    fruit3b.lifetime = 200;
    fruit3bGroup.add(fruit3b);

  }
}

function spawnenemy(){
if (World.frameCount%200===0){
  monster = createSprite(400,200,20,20);
  monster.addImage(monstera);
  monster.y=Math.round(random(100,300));
  monster.velocityX=-19;
  monster.setLifetime=50;
  
  enemyGroup.add(monster)
  
}
}


function spawn2enemy(){
if (World.frameCount%200===0){
  monster2 = createSprite(400,210,20,20);
  monster2.addImage(monster2a);
  monster2.y=Math.round(random(100,300));
  monster2.velocityX=-24;
  monster2.setLifetime=50;
  
  enemy2Group.add(monster2)
  
}
}


  