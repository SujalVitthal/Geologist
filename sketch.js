const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone, ironObject,hammerObject;
var ground;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)
    
    stone = new Stone(700,320,100,100);
    ironObject = new Iron(300,350);
    
    hammerObject = new Hammer(100,180);

}

function draw(){
    background("#FFFF66");
    Engine.update(engine);

    stone.display();
    ground.display();
    ironObject.display();
     hammerObject.display();

   
}