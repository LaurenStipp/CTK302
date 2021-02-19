let x = 0;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
}

function draw() {
  background(236,248,254);
  noStroke();

  fill(211,211,211);
  rect(1,450,500,300);

  push();
  translate(x,0);
  avatar();
  pop();
  x+=3;
  if (x > width){
    x = -500;
  }
}

function avatar(){
  //body
  push();
  fill(255, 179, 191);
  ellipse(230,355,210,110);
  pop();

  //tail
  push();
  fill(255, 179, 191);
  translate(130,360);
  rotate(-30);
  ellipse(0,0,170,50);
  pop();

  //legs
  //1st leg from the left
  push();
  fill(255, 179, 191);
  translate(150, 375);
  rotate(10);
  rect(0,0, 30, 50, 30);
  pop();

  //2nd leg from the left
  push();
  fill(255, 179, 191);
  translate(155, 378);
  rotate(-10);
  rect(0,0, 30, 50, 30);
  pop();

  // 3rd leg from the left
  push();
  fill(255, 179, 191);
  translate(260, 379);
  rotate(10);
  rect(0,0, 30, 50, 30);
  pop();

  // 4th leg from the left
  push();
  fill(255, 179, 191);
  translate(270, 379);
  rotate(-10);
  rect(0,0, 30, 50, 30);
  pop();

  // right thingys
  // can't loop ???
  push();
  fill(255, 128, 147);
  translate(290,320);
  rotate(25);
  ellipse(0,0,90,30);
  pop();

  push();
  fill(255, 128, 147);
  translate(290,345);
  //reset to 0
  ellipse(0,0,80,30);
  pop();

  push();
  fill(255, 128, 147);
  translate(290,370);
  rotate(-25);
  ellipse(0,0,90,30);
  pop();

  //left thingys
  //can't loop ???
  push();
  fill(255, 128, 147);
  translate(410,320);
  rotate(155);
  ellipse(0,0,90,30);
  pop();

  push();
  fill(255, 128, 147);
  translate(410,345);
  //reset to 0
  ellipse(0,0,80,30);
  pop();

  push();
  fill(255, 128, 147);
  translate(410,370);
  rotate(25);
  ellipse(0,0,90,30);
  pop();

  //head
  push();
  fill(255, 179, 191);
  ellipse(350,350,140,120);
  pop();

  //face
  fill(0,0,0);
  ellipse(320,350,10,10);
  ellipse(380,350,10,10);
  noFill();
  stroke(0,0,0);
  curve(350,350,380,381,320,380,100,400);
}
