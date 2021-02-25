var mic;
var vol;
var c = 'green';
var x = 0;
// let velocity = 0;

function setup() {
  createCanvas(300, 300);

  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
}


function draw() {
  background(c);


  // get the sound input
  vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1

  // check how loud the input is
  if (vol > .1) { // if the volume is LOUD?
    // do something
    // c = color(random(255), random(255), random(255)) ; // here I'm setting the background to a random color
    x = x + 5;
    if (x > width) {
      x = 0;
    }
  }

  // extra stuff for debugging
  textSize(18);
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 50);

  push();
  translate(x,0);
  rect(x, 100, 100, 100);
  rect(x, 250, 50,50);
  pop();
}


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
