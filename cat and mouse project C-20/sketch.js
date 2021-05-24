var Canvas,bg;
var together;
var  cat,catImg1,catImg2;
var mouse,mouseImg1,mouseImg2;

function preload() {
    //load the images here
   bg = loadImage("garden.png");
   catImg1 = loadImage("cat1.png");
   catImg2 = loadImage("cat2.png","cat3.png");
   catImg3 = loadImage("cat4.png");
   mouseImg1 = loadImage("mouse1.png");
   mouseImg2 = loadImage("mouse2.png","mouse3.png");
   mouseImg3 = loadImage("mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    mouse = createSprite(870, 600);
    mouse.addAnimation("mouseSleeping", mouseImg1);
    mouse.scale = 0.2;

    cat = createSprite(200, 600);
    cat.addAnimation("catStanding", catImg1);
    cat.scale = 0.15;

}

function draw() {

    background(bg);

    if(mouse.x - cat.x < (mouse.width - cat.width)/2)
    { 
        mouse.velocityX=0;
        mouse.addAnimation("mouseLastImage", mouseImg3);
        mouse.x =300;
        mouse.scale=0.2;
        mouse.changeAnimation("mouseLastImage");
        cat.addAnimation("catLastImage", catImg3);
        cat.scale=0.15;
        cat.changeAnimation("catLastImage");
    }  

    drawSprites();

}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        mouse.velocityX = -5; 
        mouse.addAnimation("mouseRunning", mouseImg2);
        mouse.changeAnimation("mouseRunning");
        
        cat.addAnimation("catTeasing", catImg2);
        cat.frameDelay = 25;
        cat.changeAnimation("catTeasing");
    }


}
