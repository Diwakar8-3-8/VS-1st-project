var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 100, 50);
  movingRect.shapeColor = "green";
  fixedRect = createSprite(600, 200, 50, 100);
  fixedRect.shapeColor = "green";
  }

function draw() {
  background(0); 
   movingRect.x = World.mouseX;
   movingRect.y = World.mouseY;
   console.log((movingRect.x)-(fixedRect.x));
   if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x - movingRect.x< movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y < movingRect.width/2+fixedRect.width/2 &&
    fixedRect.y - movingRect.y< movingRect.width/2+fixedRect.width/2)
   {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
   }
   else
   {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
   }
   //console.log("width difference"+ (movingRect.width/2)+(fixedRect.width/2));
  drawSprites();
}
