var mic;
var vol;
var c = 'green';
var x = 0;

function setup() {
  createCanvas(300, 300);

  mic = new p5.AudioIn();
  mic.start();
}


function draw() {
  background(c);
  vol = (mic.getLevel()).toFixed(2);
  if (vol > .1) {
    // c = color(random(255), random(255), random(255)) ; // here I'm setting the background to a random color
    x = x + 5;
    if (x > width) {
      x = 0;
    }
  }

  textSize(18);
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 50);

  push();
  translate(x,0);
  rect(x, 100, 100, 100);
  rect(x, 250, 50,50);
  pop();
}

function touchStarted() {
  getAudioContext().resume();
}
