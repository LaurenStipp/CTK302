let mic;
let vol;
let state = 0;
let myTimer = 0;
function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(255);
  switch(state) {
    case 0:
    background('red');
    myTimer=myTimer+1;
    if (myTimer>3*10){
      myTimer=0;
      state=1;
    }
    break;

    case 1:
    background('green');
    vol = (mic.getLevel()).toFixed(2);
    if (vol > '2.00') {
        state = 2;
      }
      textSize(18);
      text("Scream to make the leaves move."+vol,50,100);
    break;

    case 2:
    background('blue');
    myTimer=myTimer+1;
    if (myTimer>3*10){
      myTimer=0;
      state=0;
    }
    break;
  }
}
