const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world,ball,ground;

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  var Goption={
  isStatic:true  
  }
  ground=Bodies.rectangle(400,390,800,10,Goption)
  World.add(world,ground)
  var Boption={
  restitution:1
  }
  ball=Bodies.circle(400,200,30,Boption)
  World.add(world,ball)
}

function draw() {
  background(235,200,185);
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,10) 
ellipseMode(CENTER)
ellipse(ball.position.x,ball.position.y,60,60)
}