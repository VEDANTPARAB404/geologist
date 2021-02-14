
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
   

	engine = Engine.create();
	world = engine.world;

	par1 = new Particle(400,350,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue")
  
  par1.display();
  drawSprites();
}



