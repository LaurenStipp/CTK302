let state = 0;
let mic;
let vol;
let timer = 0;

function setup() {
  createCanvas(400,400);

  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
}

function draw() {
  vol = (mic.getLevel()).toFixed(2);
  switch (state) {
    case 0:
      background(100);
      text("click to start", width / 2, height / 2);
      break;

    case 1:
      background('yellow');
      text("SHHHHHHHH!!!!!!", width / 2, height / 2);
      if (vol > .2) {
        state = 2;
      }
      break;

    case 2:
      background('purple');
      text("BE QUIET!!!!", width / 2, height / 2);
      timer++;
      if (timer > 3 * 60) {
        state = 1;
        timer = 0;
      }
      break;
  }
}

function mouseReleased() {
  if (state == 0) {
    state = 1;
  }
}

function touchStarted() {
  getAudioContext().resume();
}
