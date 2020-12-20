const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var person;
var maxDrops = 100;
var drops = [];
var thunder;
var thundercreatedframe = 0;
var thun1 , thun2 , thun3 , thun4;

function preload(){
    thun1 = loadImage("thunderbolt/1.png");
    thun2 = loadImage("thunderbolt/2.png");
    thun3 = loadImage("thunderbolt/3.png");
    thun4 = loadImage("thunderbolt/4.png");
}

function setup(){
    createCanvas(500,700);
    engine = Engine.create();
	world = engine.world;
    Engine.run(engine);
    
    person = new umbrella(200,480)
    if(frameCount % 50 === 0){
        for(var i = 0 ; i<maxDrops ; i++){
            drops.push(new drop(random(0,400), random(0,400)))
        }
    }
    
    
}

function draw(){
    Engine.update(engine);
    drawSprites();
    background("black")
    person.display()
    for(var i = 0 ; i<maxDrops ; i++){
        drops[i].display();
        drops[i].update();
    }
    var rand = Math.round(random(1,4));
    if(frameCount%100===0){
        console.log("error")
        thundercreatedframe=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thun1);
            break;
            case 2: thunder.addImage(thun2);
            break; 
            case 3: thunder.addImage(thun3);
            break;
            case 4: thunder.addImage(thun4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.5)
    }

   
}   

