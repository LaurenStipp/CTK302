let state=0;
let song1,song2,song3;

function preload(){
  song1 = loadSound("assets/bubble.mp3");
  song2 = loadSound("assets/education.mp3");
  song3 = loadSound("assets/cheers.mp3");

  song1.loop();
  song1.pause();
  song2.loop();
  song2.pause();
  song3.loop();
  song3.pause();
}

function setup() {
  createCanvas(600,600);
}

function draw() {
  background(255);
  textSize(18);
  switch(state) {
    case 0:
    song1.play();
    state = 1;
    break;

    case 1:
    text("BUBBLE GUPPIES",100,100);
    break;

    case 2:
    song2.play();
    state = 3;
    break;

    case 3:
    text("EDUCATION CONNECTION\ntakes a second for two to play due to starting time",100,100);
    break;

    case 4:
    song3.play();
    state = 5;
    break;

    case 5:
    text("CHEERS",100,100);
    break;
  }
}

function mouseReleased(){
  song1.pause();
  song2.pause();
  song3.pause();
  state=state + 1;
  if (state > 5){
    state = 0;
  }
}

function touchStarted() {
  getAudioContext().resume();
}
