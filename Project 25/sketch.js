
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, bin, fall;
var floor;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;
	ball = new Ball(600, 0);
	//applyForce(199, 330);
	bin = new Box(600, 310, 90, 120);
	bin.isStatic = true;
	floor = new Box(400, 370, 800, 10);
	floor.isStatic = true;
	//Create the Bodies Here.
	fall = 0;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  floor.display();
  //applyForce(ball, ball.position, {x: 85, y: 80});
  //ball.display();
  bin.display();
  //alert("h")
  //applyForce(ball, 100, 420);
  ball.display();
  //console.log(Math.round(random(1, 5)));
  //Body.applyForce(ball, ball.body.position, {x:0.05, y: 0});
  //alert("hhhh")
  //alert(fall);
  //drawSprites();
 //if(fall == 1){
	//alert("hhhh");
	 //Matter.Body.applyForce(ball.body, ball.body.position, {x: 85, y: -85});
 //}
}
/*function keyPressed(){
	if(keyPressed("L")){
		fall = 1;
	}
}
*/

