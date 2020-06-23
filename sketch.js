const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody;
var box1,box2,box3;
var ground;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	box1 = new box(265,650,20,100);
	box2 = new box(485,650,20,100);
	box3 = new box(375,690,200,20);
	

	packageSprite=createSprite(width/2, 30, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	
	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5,{restitution:0.1,isStatic:true} );
	World.add(world, packageBody);

	var options={
		isStatic:true
	}

	ground=Bodies.rectangle(200,667,width,10,options);
	World.add(world,ground);
	
	Engine.run(engine);
	box3 = new box(375,690,200,20);

  
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  box1.display();
  box2.display();
  box3.display();
  
     
 
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
    
  }
}





