var ball 
function setup() {
  createCanvas(400,400);
  ball = createSprite(50,50,30,30)
  ball.shapeColor = "orange"
}

function draw() 
{
  background(204,229,255);
  drawSprites()
  if(keyIsDown(LEFT_ARROW)){
    ball.x = ball.x -5
  }
  if(keyIsDown(RIGHT_ARROW)){
    ball.x = ball.x +5
  }
  if(keyIsDown(UP_ARROW)){
    ball.y = ball.y -5
  }
  if(keyIsDown(DOWN_ARROW)){
    ball.y = ball.y +5
  }
}




