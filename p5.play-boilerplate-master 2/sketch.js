const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,body,ground;

function setup() {
  createCanvas(400,400);
engine=Engine.create();
world=engine.world;

var body_options={
  restitution:1,
  friction:0.001,
  
}
body=Bodies.rectangle(200,20,50,50,body_options);
World.add(world,body);

var options={
  isStatic:true
}
ground=Bodies.rectangle(200,390,400,20,options)
World.add(world,ground);




 
}

function draw() {
  background(255,200,255);  
  Engine.update(engine);
rectMode(CENTER);
rect(body.position.x,body.position.y,50,50);
rect(ground.position.x,ground.position.y,400,20)
  
}