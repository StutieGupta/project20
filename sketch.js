var car, wall;
var speed, weight;

function setup() {
  createCanvas(800,400);

  speed=random(55,90);
  weight=random(400,1500);

  car = createSprite(40,200,50,50);
  car.velocityX = speed;

  wall = createSprite(700,200,60,height/2);
  wall.shapeColor = "black"
}

function draw() {
  background(25,255,255); 
  
  if(wall.x - car.x < 0){
    car.velocityX = 0;
    var deformation = 0.5*speed*speed*weight/22500

    if(deformation < 100){
      car.shapeColor = "green";
    }

    if(deformation > 100 && deformation < 180){
      car.shapeColor = "yellow";
    }

    if(deformation > 180){
      car.shapeColor = "red";
    }

    
    

  }
  drawSprites();
}