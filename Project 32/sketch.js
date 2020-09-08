
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var polygon, slingShot, ground1;
var score = 0;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  box1 = new Box(500,270,30,30);
  box2 = new Box(485,300,30,30);
  box3 = new Box(515,300,30,30);
  box4 = new Box(470,330,30,30);
  box5 = new Box(500,330,30,30);
  box6 = new Box(530,330,30,30);
  box7 = new Box(455,360,30,30);
  box8 = new Box(485,360,30,30);
  box9 = new Box(515,360,30,30);
  box10 = new Box(545,360,30,30);

  ground1 = new Ground(500,380,200,10);

  ground2 = new Ground(400,590,800,10);

  polygon = new Polygon(50,200,40);
  
  slingShot = new Sling(polygon.body,{x:100, y:360});
  
  Engine.run(engine);
  
}

function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  
  background(255);

  

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  ground1.display();
  ground2.display();

  polygon.display();

  slingShot.display();
  
  box1.Score();
  box2.Score();
  box3.Score();
  box4.Score();
  box5.Score();
  box6.Score();
  box7.Score();
  box8.Score();
  box9.Score();
  box10.Score();

  fill("black");
  strokeWeight(20);
  text("SCORE : "+ score, 720, 40);

  drawSprites();
 
}

function mouseDragged() {
  Matter.Body.setPosition(polygon.body, {x : mouseX, y : mouseY})  
}

function mouseReleased() {
  slingShot.fly();  
}

function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(polygon.body);
  }
}

