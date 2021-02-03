var canvas;
var music;
var surface1
var surface2
var surface3
var surface4
var Box

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
   
    canvas = createCanvas(800,600);
        
    //create 4 different surfaces
    surface1 = createSprite(678,576,50,50);
    surface1.shapeColor = "yellow";

    surface2 = createSprite(366,311,50,50);
    surface2.shapeColor = "red";

    surface3 = createSprite(166,544,50,50);
    surface3.shapeColor = "blue";

    surface4 = createSprite (38,566,50,50);
    surface4.shapeColor = "green";

    //create box sprite and give velocity
    Box = createSprite(random(20,750));
    Box.shapeColor = "white";
    Box.velocityX = -5
}

function draw() {
    background(rgb(169,169,169));

    //create edgeSprite
  createEdgeSprites();
  Box.bounceOff(edges);

  text(mouseX + ',' + mouseY,10,45);

    //add condition to check if box touching surface and make it box

    createSprites();
}