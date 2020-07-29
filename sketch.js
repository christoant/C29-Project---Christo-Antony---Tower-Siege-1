const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

// var gameState = 0;

var ground, stand1,stand2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13;
var polygon,polygon_string;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  box1 = new Box(300,280,40,40);
  box2 = new Box(320,280,40,40);
  box3 = new Box(340,280,40,40);
  box4 = new Box(270,280,40,40);
  box5 = new Box(260,280,40,40);
  box6 = new Box(280,260,40,40);
  box7 = new Box(300,260,40,40);
  box8 = new Box(320,260,40,40);
  box9 = new Box(300,240,40,40);
  box10 = new Box(600,130,40,40);
  box11 = new Box(620,130,40,40);
  box12 = new Box(580,130,40,40);
  box13 = new Box(600,110,40,40);


  ground = new Ground(400,400,800,25);
  stand1 = new Ground(300,300,250,25);
  stand2 = new Ground(600,150,175,25);

  polygon = new Polygon(150,100,40,40);
  
  polygon_string = new SlingShot(polygon.body, {x: 100,y:100});

  // Engine.run(engine);

}

function draw(){
  background("cream");

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
  box11.display();
  box12.display();
  box13.display();

  ground.display();
  stand1.display();
  stand2.display();

  polygon.display();

  polygon_string.display();
  
  // box1.body.position.x = mouseX;
  // box1.body.position.y = mouseY;

  reset();

  drawSprites();

  Engine.update(engine);
}

function mouseDragged(){
    // if(gameState!== 1){
      Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
    // }
}

function mouseReleased(){
  polygon_string.fly();
  // gameState = 1;
}

function reset(){
  if(keyCode === 32){
    polygon_string.attach(polygon.body);
    // gameState = 0;
  }
}