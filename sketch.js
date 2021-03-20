var tom,tom_Image;
var jerry,jerry_Image;
var garden , gardenImage;

function preload() {
    //loading images 
    tom_Image = loadImage("cat2.png");
    jerry_Image = loadAnimation("mouse2.png");
    gardenImage = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //creating tom and jerry sprites 
    garden = createSprite(500,400,20,20);
    garden.addImage(gardenImage);
    tom = createSprite(500,500,30,30);
    tom.addImage(tom_Image);
    jerry = createSprite(200,500,40,40);
    jerry.addImage(jerry_Image);
}

function draw() {
    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
