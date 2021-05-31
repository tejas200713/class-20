var a,b;
function setup() {
  createCanvas(800,400);
 a =  createSprite(400, 200, 50, 50);
 a.shapeColor = "Green";
 b =createSprite(400,300,60,70);
 b.shapeColor = "Green";
 
}

function draw() {
  background("black");  
  b.x = World.mouseX;
  b.y = World.mouseY;
  if((b.x - a.x <= (a.width/2+b.width/2)&& a.x - b.x <= (a.width/2+b.width/2))&&
  (b.y - a.y <= (a.height/2+b.height/2)&& a.y - b.y <= (a.height/2+b.height/2))){
    a.shapeColor = "White";
    b.shapeColor = "White";
  }
  else {
    a.shapeColor = "Green";
    b.shapeColor = "Green";
  }
  
  drawSprites();
}