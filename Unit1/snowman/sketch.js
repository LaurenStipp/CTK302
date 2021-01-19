
function setup() {
  createCanvas(500, 500);
  background(0,200,255);
}

function draw() {
  //bottom of snowman
  ellipse(width/2, height/2, 100, 100);
  //middle of snowman
  ellipse(width/2, height/2+125, 150, 150);
  //top of snowman
  ellipse(width/2, height/2-75, 50, 50);
}
