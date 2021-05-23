const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,square1;
var pig1,bird;
var log1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,10,10);
    box3 = new Box(200,300,10,10);
    box4 = new Box(210,300,10,10);
    box5 = new Box(210,300,10,10);
    box2 = new Box(920,320,60,60);
    ground = new Ground(600,height,1200,20)
    pig1=new Pig(800,350);
    log1=new Log(800,260,300,PI/2);
    square1=new Squares(200,240,20,20);
    square2=new Squares(900,240,70,70);
    pig2=new Pig(250,220);
    box6=new Box(300,150,70,70);
    bird=new Bird(100,100)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box6.display();
    square1.display();
    square2.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    bird.display();
}