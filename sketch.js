//deta types
//numeric
var a = 25;
console.log(a);

//string
var b = "anushka";
console.log(b);

//boolean
var c = true;
console.log(c);

//null
var d = null;
console.log(d);

//undefined
var e ;
console.log(e);

//array
var f = [20,true,"abcd"]
console.log(f)
console.log(f.length)
console.log(f[2])
console.log(f[0])
console.log(f[1])

f.push(false);
console.log(f);

f.push("anushka");
console.log(f);
console.log(f[4]);

f.pop()
console.log(f);


var ff = [[2,"garima"],3,"anushka"]
console.log(ff)
console.log(ff[0])
console.log(ff[0][0])

var gg = [[1,2],[2,3],[3,4]]
console.log(gg);
console.log(gg.length);
console.log(gg[0][0]);
console.log(gg[1][0]);
console.log(gg[2][0]);


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg;
var ss;
var gameState = "onSling";
var Score = 0;

function preload() {
    getbag();

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   

    
    ground = new Ground(600,height,1200,20)
    platform = new Ground(150,305,300,170) 

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    ss = new SLINGSHOT(bird.body,{x:200,y:50});

    
    
    
}

function draw(){
    if(backgroundImg){
    background(backgroundImg);
    }
    Engine.update(engine);
   // console.log(box2.body.position.x);
   // console.log(box2.body.position.y);
  //  console.log(box2.body.angle);
   
  textSize(30);
  text("Score : " +Score,1000,50)

    box1.display();
    box2.display();
    ground.display();
    platform.display();    

    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    ss.display();
    
}

function mouseDragged(){
    if(gameState === "onSling"){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
    }
}

function mouseReleased(){
    ss.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        ss.attach(bird.body);
        gameState = "onSling";
        bird.path = [];
        Matter.Body.setPosition(bird.body,{x:200,y:50});
    }
}


async function getbag(){
    var response =await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var response1 =await response.json();
    var datetime1 = response1.datetime
    var time1 = datetime1.slice(11,13);
    if(time1 > 06 && time1<20){
        backgroundImg = loadImage("sprites/bg.png");
    }else{
        backgroundImg = loadImage("sprites/nightImg.jpg");
    }
    console.log(time1);
}
