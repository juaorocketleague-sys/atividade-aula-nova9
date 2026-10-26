var box
function setup() {
  createCanvas(700,400);
  box= createSprite(350,200,50,50)
}

function draw() 
{
  background(30);
  if(keyDown("w")){
    box.shapeColor="blue"    
  }
   if(keyDown("s")){
    box.shapeColor="Yellow"    
  } if(keyDown("d")){
    box.shapeColor="red"    
  } if(keyDown("a")){
    box.shapeColor="green"    
  }
drawSprites()
}




