const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var particles = [];
var plinko = [];
var divisions = [];

var divisionHeight = 300;

function preload(){
    
}

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(240, 790, 480, 20);

    for(var i = 0; i<=width; i = i+80){
        divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
    }

    for(var k = 35; k<= width; k = k+ 50){
        plinko.push(new Plinko(k, 60));
    }
    for(var k = 15; k<=width; k = k+50){
        plinko.push(new Plinko(k, 120));
    }
    for(var k = 35; k<=width; k = k+50){
        plinko.push(new Plinko(k, 180));
    }

    for(var k = 15; k<=width; k = k+50){
        plinko.push(new Plinko(k, 240));
    }
    for(var k = 35; k<=width; k = k+50){
        plinko.push(new Plinko(k, 300));
    }
    for(var k = 15; k<=width; k = k+50){
        plinko.push(new Plinko(k, 360));
    }
    for(var k = 35; k<=width; k = k+50){
        plinko.push(new Plinko(k, 420));
    }

   
    
    
}

function draw(){
    rectMode(CENTER);
    background(0);
    Engine.update(engine);
    
    for(i = 0; i< divisions.length; i++ )   {
        divisions[i].display();
    }

    for(k = 0; k<plinko.length; k++){
        plinko[k].display();
    }
    
    if(frameCount % 90 === 0){
        particles.push(new Particle(random(0, 400), 0));
    }

    for(var j = 0; j<particles.length; j++){
        particles[j].display();
    }

    ground.display();

}


