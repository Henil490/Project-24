
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var dustbin1,dustbin2,dustbin3;

function preload()
{

}

function setup() {
	createCanvas(800, 700);

 
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(200,100,30);
	dustbin1=new Dustbin(600,670,200,20);
	dustbin2=new Dustbin(500,580,20,200);
	dustbin3=new Dustbin(700,600,20,100);


	groundSprite=createSprite(400,680,800,20);

	Engine.run(engine);
  
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}
