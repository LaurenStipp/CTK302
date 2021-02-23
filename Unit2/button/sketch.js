let state=0;
function setup() {
  createCanvas(500, 500);
  textSize(40);
  textAlign(CENTER);
}

function draw() {
  switch(state) {
    case 0:
    background('white');
    text("case 0",250,250);
    break;

    case 1:
    background('yellow');
    text("case 1",250,250);
    break;

    case 2:
    background('pink');
    text("case 2",250,250);
    break;
  }

  fill('purple');
  rect(width/2-50, height-100,100,50);

}

function mouseReleased(){
  if ((mouseX>width/2-50)&&(mouseX<width/2+50)&&(mouseY>height-100)&&(mouseY<height-50)) {
    state=state + 1;
    if (state > 2){
      state = 0;
    }
  }
}
