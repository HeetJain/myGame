var fixedRect,movingRect,fixedRect2,fixedRect3;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(300,100,50,50);
  movingRect.velocityX = 2;
  fixedRect2 = createSprite(200,100,50,50);
  fixedRect3 = createSprite(600,100,50,50);
  fixedRect3.velocityX = -2;
}

function draw() {
  background(255,255,255); 
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  if(  isTouching(fixedRect3,movingRect)){
    movingRect.shapeColor = "blue"
    fixedRect3.shapeColor = "blue"
  }
  else{
    movingRect.shapeColor = "green"
    fixedRect3.shapeColor = "green"
  }
  
  bounceOff(fixedRect3,movingRect);
 
  
  drawSprites();
}

