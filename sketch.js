
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
	ground=new Dustbin(500,590,1000,10);
	paper=new Paper(200,100,30);
	dustbin1=new Dustbin(800,585,200,20);
	dustbin2=new Dustbin(700,500,10,150);
	dustbin3=new Dustbin(900,500,10,150);


	

	Engine.run(engine);
  
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
ground.display();
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
