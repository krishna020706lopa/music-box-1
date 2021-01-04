var canvas;
var music;
var box;
var wall1,wall2,wall3,wall4;
var edges;
function preload(){
    music = loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(800,600);
    music.play();
    //create 4 different surfaces
   wall1=createSprite(100,600,190,20);
   wall1.shapeColor="red";
   wall2=createSprite(300,600,190,20);
   wall2.shapeColor="green";
   wall3=createSprite(500,600,190,20);
   wall3.shapeColor="orange";
   wall4=createSprite(700,600,190,20);
   wall4.shapeColor="blue";
    //create box sprite and give velocity
    box=createSprite(random(20,750),0,30,30);
    box.velocityY=2;
    box.velocityX=2;
    box.shapeColor=rgb(255,255,255);
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
  edges=createEdgeSprites();
  box.bounceOff(edges);
    //add condition to check if box touching surface and make it box
    if(wall1.isTouching(box)&&box.bounceOff(wall1)){
        box.shapeColor=rgb(255,0,0);
        music.play();
    }
    if(wall2.isTouching(box)){
        box.velocityY=0;
        box.velocityX=0;
        box.shapeColor=rgb(0,255,0);
        music.stop();
        }
    if(wall3.isTouching(box)&&box.bounceOff(wall3)){
        box.shapeColor="orange";
        }
    if(wall4.isTouching(box)&&box.bounceOff(wall4)){
        box.shapeColor=rgb(0,0,255);
        }
    drawSprites();
}