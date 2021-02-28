let mic;
let vol;
let state = 0;
let timer = 0;

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  clear();
  touch = touches.length;
  background(255);
  switch (state) {
    case 0:
      background(208,239,254);
      text("Click to continue your journey", width / 2, height / 2);
          timer++;
          if (timer > 3 * 60) {
            state = 1;
            timer = 0;
      }
      break;

    case 1:
      //touch the rock to continue
      background(87,171,78);
      text("tap the circle to continue", width/2+10,height/2+10);
      rect(width/2-50, height-100,100,50);
      if ((mouseX>width/2-50)&&(mouseX<width/2+50)&&(mouseY>height-100)&&(mouseY<height-50)) {
        if (touch == 1 ){
          state = 2;
        }
      }
      break;

    case 2:
      background(87,171,78);
      vol = (mic.getLevel()).toFixed(2);
      if (vol > .5) {
        state = 3;
      }
      textSize(18);
      text("Scream to wake the slugs." + vol, width / 2, height / 2);
      break;

    case 3:
      background(87,171,78);
      textSize(18);
      text("the end", width / 2, height / 2);
      break;
  }
}
// 
// function mouseReleased() {
//   if (state == 0) {
//     state = 1;
//   }
// }

function touchStarted() {
  getAudioContext().resume();
}
