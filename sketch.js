var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(400, 200, 50, 100);

  movingRect = createSprite(400,200,100,50);
  fixedRect.debug= true;
  movingRect.debug=true;
  fixedRect.shapeColor="green"
  movingRect.shapeColor="green"
}

function draw() {
  background("black");  

  movingRect.x = mouseX;
  movingRect.y = mouseY;



  
  
  drawSprites();
}
