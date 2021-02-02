const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var Ground1;
var pig1,pig2
var bird1;
var log1,log2,log3,log4;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,550,70,70);
    box2 = new Box (900,550,70,70);

    Ground1 = new Ground(600,595,1200,10);
    pig1 = new Pig(800,550);
    bird1 = new Bird(200,200);
    console.log(bird1.body)
    log1 = new Log(800,500,200,PI/2);
    console.log(log1.body)
    
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    Ground1.display();
    pig1.display();
    bird1.display();
    log1.display();
}