let state=0;
let timer=0;

function setup() {
  createCanvas(500,500);
  textAlign(CENTER);
  textSize(24);
}

function draw() {
  switch(state) {
    case 0:
    background('grey');
    text("Did you hear about the restaurant \non the moon?",width/2,height/2);
    break;

    case 1:
    background(0,0,102);
    fill(255);
    text("Great food,\nno atmosphere!",width/2,height/2);
    break;

  }
  timer++;
  if (timer > 3*60){
    state++;
    timer = 0;
    if (state > 1){
      state = 0;
    }
  }
}
