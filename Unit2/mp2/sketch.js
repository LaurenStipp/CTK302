let mic;
let vol;
let state = 0;
let timer = 0;
let x = 0;

let cloud1, cloud2;
let rock;
let forest;
let slug1, slug1awake, slug2, slug2awake, slug3, slug3awake;

function setup() {
  createCanvas(500, 500);
  mic = new p5.AudioIn();
  mic.start();

  cloud1 = loadImage("assets/cloud1.png");
  cloud2 = loadImage("assets/cloud2.png");
  rock = loadImage("assets/rock.png");
  forest = loadImage("assets/background.png");
  slug1 = loadImage("assets/slug1.png");
  slug1awake = loadImage("assets/slug1awake.png");
  slug2 = loadImage("assets/slug2.png");
  slug2awake = loadImage("assets/slug2awake.png");
  slug3 = loadImage("assets/slug3.png");
  slug3awake = loadImage("assets/slug3awake.png");

  textAlign(CENTER);
}

function draw() {
  clear();
  touch = touches.length;
  background(255);
  switch (state) {
    case 0:
      //sets up the story
      background(208, 239, 254);
      textSize(18);
      text("One day you decided to take a walk \non a nice day. While on your walk,\nsomething caught your eye.", width / 2, height / 2);
      push();
      translate(x, 0);
      clouds();
      pop();
      x += 2;
      if (x > width + 300) {
        x = -500;
      }
      push();
      fill(76, 166, 76);
      noStroke();
      rect(0, 400, 500, 80);
      pop();
      image(forest, -110, 20, 650, 500);
      timer++;
      if (timer > 3 * 80) {
        state = 1;
        timer = 0;
      }
      break;

    case 1:
      //touch the rock to continue
      background(76, 166, 76);
      image(rock, width / 2 - 130, height / 2 - 180, 390, 490);
      text("It was a rock that caught your eye.\nYou notice there's something underneath it.", width / 2, height / 2 - 200);
      text("Tap the rock to find out what's underneath", width / 2, height / 2 + 220);
      if ((mouseX > width / 2 - 50) && (mouseX < width / 2 + 50) && (mouseY > height - 100) && (mouseY < height - 50)) {
        if (touch == 1) {
          state = 2;
        }
      }
      break;

    case 2:
      //scream at the slugs to continue
      background(87, 171, 78);
      vol = (mic.getLevel()).toFixed(2);
      if (vol > .5) {
        state = 3;
      }
      textSize(18);
      text("You found some slugs that are sleeping.\nScream to wake the slugs." + vol, width / 2, height / 2);
      image(slug1, width / 2 - 150, height / 2 - 90, 100, 200);
      image(slug2, width / 2 - 100, height / 2 + 60, 250, 150);
      image(slug3, width / 2 - 50, height / 2 - 90, 150, 160);
      break;

    case 3:
      background(87, 171, 78);
      textSize(18);
      text("You woke the slugs up!", width / 2, height / 2);
      image(slug1awake, width / 2 - 150, height / 2 - 90, 100, 200);
      image(slug2awake, width / 2 - 100, height / 2 + 60, 250, 150);
      image(slug3awake, width / 2 - 50, height / 2 - 90, 150, 160);
      timer++;
      if (timer > 3 * 80) {
        state = 0;
        timer = 0;
      }
      break;
  }
}

function clouds() {
  image(cloud1, 50, 100, 150, 90);
  image(cloud2, 300, 50, 150, 90);
  image(cloud1, -130, 50, 150, 90);
  image(cloud2, -350, 150, 150, 90);
}

// function mouseReleased() {
//   state = state + 1;
//   if (state > 3) {
//     state = 0;
//   }
// }

function touchStarted() {
  getAudioContext().resume();
}
