//creates variables
var car,wall,speed,weight,df;

function setup() {
  //creates a canvas
  createCanvas(1600,400);

  //adds properties to variables
  speed=random(55,90);
  weight=random(400,1500);

  //creates a sprite and its properties
  car = createSprite(50, 200, 75, 50);
  car.velocityX=speed;

  //creates a sprite and its properties
  wall = createSprite(1500, 200, 60, 60);
  wall.shapeColor=(80,80,80);
}

function draw() {
  //creates a background
  background(255,255,255);  

  df=0.5*weight*speed*speed/22500;
  
  if(df<100 && car.isTouching(wall)){
    car.shapeColor="green";
  }
  else if(df>100 && df<180 && car.isTouching(wall)){
    car.shapeColor="yellow";
  }
  else if(df>180 && car.isTouching(wall)){
    car.shapeColor="red";
  }

  if (car.isTouching(wall)) {
    car.velocityX=0;
  }

  //draws all the sprites
  drawSprites();
}