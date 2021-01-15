const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies
var engine, world;
var ground;
var plinkos = []
var particles = []
var divisions = []
var divisionHeight = 300;

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(480,800);
 // createSprite(400, 200, 50, 50);
 ground = new Ground(240,790,480,20)
 for(j=0; j<particles.length; j++){
  particles[j].display();
}
for(k=0; k<divisions.length; k++){
  divisions[k].display();
}
 
}

function draw() {
  background(22);  
 
  for( var k = 0 ; k<=innerWidth; k=k+80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  } 

for(var j = 40; j<=width; j = j+50){
   plinkos.push(new Plinko(j, 75))
 }

 for(var j = 40; j<=width; j= j+50){
   plinkos.push(new Plinko(j, 175))
 }

  for(var j = 40; j<=width; j=j+50){
    plinkos.push(new plinkos(j, 275))
 }

  for(var j = 40; j<=width; j=j+50){
    plinkos.push(new plinkos(j, 375))
  }

  

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10)))
  }


  ground.display();
 
  
}