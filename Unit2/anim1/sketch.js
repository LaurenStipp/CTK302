let x = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100);
  //rect(x,100,100,100);
  textSize(20);
  text("baby",x,100);
  x += 5;
  if(x > width) {
    x = -100;
  }
}
