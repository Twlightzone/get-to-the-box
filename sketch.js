const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;


var bH,bV;
var title;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(2000,500);
  engine = Engine.create();
  world = engine.world;
  let ball_options={
        restitution: 1,
    frictionAir:0.01,
    friction:0.02,
  }
title=createElement('h2');
title.html("Get To The BOX               by the way if the ball goes out of screen reload the page");


bV=createImg("up.png");
bV.size(50,50);
bV.position(1000,30);
bV.mouseClicked(VUforce);



bH=createImg('right.png')
bH.size(50,50);
bH.position(1050,30);
bH.mouseClicked(HRforce)

BH=createImg('leftA.png')
BH.size(50,50);
BH.position(950,30);
BH.mouseClicked(HLforce)

  ground =new Ground(1000 ,490,3000,20);
  right = new Ground(1920,250,20,500);
  left = new Ground(10,250,20,500);
  top_wall = new Ground(1000,10,3000,20);
  box1 = new Ground(1540,250,10,80);
  box2 = new Ground(1500,290,80,10);
  box3 = new Ground(1460,250,10,80);
  
  ball = Bodies.circle(200,10,20,ball_options);
  World.add(world,ball);
  
  
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);


  ground.show();
  top_wall.show();
  ellipse(ball.position.x,ball.position.y,20);

  left.show();
  right.show();
  box1.show();
  box2.show();
  box3.show();
  Engine.update(engine);
}

function HRforce() {

Matter.Body.applyForce(ball,{x:0,y:0},{x:0.03,y:0})
  
}

function VUforce() {

  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.03})
  
}


function HLforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.03,y:0})
}





