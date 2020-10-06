var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(400, 200, 50, 100);

  movingRect = createSprite(400,200,100,50);
  fixedRect.debug= true;
  movingRect.debug=true;
  fixedRect.shapeColor="red"
  movingRect.shapeColor="red"
}

function draw() {
  background("black");  

  movingRect.x = mouseX;
  movingRect.y = mouseY;



  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    ){

    fixedRect.shapeColor="green"
    movingRect.shapeColor="green"

    }
    else{

      fixedRect.shapeColor="red"
      movingRect.shapeColor="red"
    }
  
  drawSprites();
}