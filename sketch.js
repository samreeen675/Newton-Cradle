const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var rope1,rope2,rope3,rope4,rope5;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

function preload()
{
    
}

function setup() {
    createCanvas(1600, 700);

    engine = Engine.create();
    world = engine.world;
    
    roofObject=new roof(width/2,height/4,width/7,20);

    bobObject1 = new bob(720,675,40);
    bobObject2 = new bob(760,675,40);
    bobObject3 = new bob(800,675,40);
    bobObject4 = new bob(840,675,40);
	bobObject5 = new bob(880,675,40);

	// keyPressed();
	
	rope1 =new rope(bobObject1.body,roofObject.body,-80, 0);
	rope2 =new rope(bobObject2.body,roofObject.body,-40,0);
	rope3 =new rope(bobObject3.body,roofObject.body,0,0);
	rope4 =new rope(bobObject4.body,roofObject.body,40,0);
  rope5 =new rope(bobObject5.body,roofObject.body,80,0);
  
	

 

    Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(222, 224, 227);
  roofObject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
	} 

}






