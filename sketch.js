var wall, thickness;
var bullet, speed, weight;


function setup() {
 
  thickness = random(22,83);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(100, 300, 30, 10);  
  bullet.velocityX = speed;
}
function draw() {
  createCanvas(1600,400); 

  function hasCollided(Lbullet,Lwall)
  {
    bulletRightEdge=Lbullet.x + Lbullet.width;
    wallLeftEdge=Lwall.x;
    if (bulletRightEdge>=wallLeftEdge)
    {
          return true

    }
      return false;
  }

  if (hasCollided(bullet,wall)) {
  bullet.velocityX = 0;
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

  if (damage>10) {
  wall.shapeColor = color(255,0,0);
  }
  
  if (damage<10) {
  wall.shapeColor = color(0,255,0);
  }

}



    
  drawSprites();
}