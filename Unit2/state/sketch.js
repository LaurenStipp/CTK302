let state=0;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(255);

  r = random(255);

  g = random(255);

  b = random(255);
  switch(state) {
    case 0:
    background(255);
    for (var j=0; j<=height; j++) {
      for (var i=0; i<=width; i++) {
        fill(r,g,b);
        square(i*30,j*30,15);
      }
    }
    break;

    case 1:
    for (var j=0; j<=height;j ++) {
      for (var i=0; i<=width; i++) {
        fill(0,139,139);
        circle(i*30, j*30, 60);
      }
    }
    break;

    case 2:
    background(67,97,238);
    for (var j=0; j<=height; j++) {
      for (var i=0; i<=width; i++) {
        fill(255,255,0);
        rotate(25);
        square(i*40,j*30,50);
      }
    }
    break;

    case 3:
    background(142,41,78);
    for (var j=0; j<=height;j ++) {
      for (var i=0; i<=width; i++) {
        fill(0,139,139);
        stroke(200);
        line(i*50, j*50, i*20,j*20);
      }
    }
    break;

    case 4:
    background(223,163,91);
    textSize(12);
    for (var j=0; j<=height;j ++) {
      for (var i=0; i<=width; i++) {
        fill(0);
        text("wow", i*20, j*20);
      }
    }
    break;
  }
}

function mouseReleased(){
  state=state + 1;
  if (state > 4){
    state = 0;
  }
}
