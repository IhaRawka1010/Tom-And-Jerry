//to store the sprites and images
var background1,cat,mouse;
var gardenImage,catImage1,catImage2,catImage3,mouseImage1,mouseImage2,mouseImage3;

function preload() {
    //To load the images 
    gardenImage=loadImage("garden.png");

    catImage1=loadImage("cat1.png");
    catImage2=loadAnimation("cat2.png","cat3.png");
    catImage3=loadImage("cat4.png");

    mouseImage1=loadImage("mouse1.png");
    mouseImage2=loadAnimation("mouse2.png","mouse3.png");
    mouseImage3=loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    //to create the background sprite
    background1=createSprite(500,400,10,50);
    background1.addImage(gardenImage);

    //To create cat and mouse sprites 
    cat=createSprite(700,650);
    cat.addImage(catImage1);
    cat.scale=0.1;

    mouse=createSprite(100,650);
    mouse.addImage(mouseImage1);
    mouse.scale=0.1;
}

function draw() {

    background(255);

    //text(mouseX+','+mouseY,10,45);

    //To evalute if cat and mouse collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        
        cat.velocityX=0;

        cat.addImage("catLastImage",catImage3,20,650);
        cat.changeImage("catLastImage");

        mouse.addImage("mouseLastImage",mouseImage3);
        mouse.changeImage("mouseLastImage");
    }

    drawSprites();
}

function keyPressed(){

  //For moving and changing animation 
  if(keyCode===LEFT_ARROW){

      cat.velocityX=-5;

      cat.addAnimation("catRunning",catImage2);
      cat.changeAnimation("catRunning");

      mouse.addAnimation("mouseTeasing",mouseImage2);
      mouse.changeAnimation("mouseTeasing");
  }

}
