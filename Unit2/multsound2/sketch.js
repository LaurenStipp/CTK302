let sNotPressed, sPressed;

function preload() {
  sNotPressed = loadSound("assets/education.mp3");
  sPressed = loadSound("assets/cheers.mp3");

}

function setup() {
  createCanvas(500, 500);
  sNotPressed.loop();

}

function draw() {
  background(100);

  if (!(mouseIsPressed) && (sPressed.isPlaying())) {
    sPressed.pause();
    sNotPressed.loop();
    print("triggering Non-Pressed song");

  } else if ((mouseIsPressed) && (sNotPressed.isPlaying())) {
    sNotPressed.pause();
    sPressed.loop();
    print("triggering Pressed song");

  }


}

// add these to programs that use sound, at the bottom
function touchStarted() {
  getAudioContext().resume();
}
