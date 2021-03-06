let cars = [];
let frogPos;
let state = 0;
let timer = 0;
let maxCars = 10; //changes the # of cars/objects
let maxTimer = 11; //changes the timer ammount
let title_screen, game_screen, win_screen, lose_screen;
let icicle, snowball;
let yeti;
let title, gmus, win, lose;

function preload() {
  title = loadSound("assets/title.mp3");
  gmus = loadSound("assets/game.mp3");
  win = loadSound("assets/win.mp3");
  lose = loadSound("assets/lose.mp3");

  title.loop();
  title.pause();
  gmus.loop();
  gmus.pause();
  win.loop();
  win.pause();
  lose.loop();
  lose.pause();

}

function setup() {

  createCanvas(960, 540);

  title_screen = loadImage("assets/title_screen.jpg");
  game_screen = loadImage("assets/game_screen.jpg");
  win_screen = loadImage("assets/win_screen.jpg");
  lose_screen = loadImage("assets/lose_screen.jpg");
  icicle = loadImage("assets/icicle.png");
  snowball = loadImage("assets/snowball.png");
  yeti = loadImage("assets/yeti.png");
  imageMode(CENTER);

  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(width / 2, height - 100);

}

function draw() {
  switch (state) {
    case -1:
      title.loop();
      state = 0;
      break;

    case 0:
      image(title_screen, width / 2, height / 2, 960, 540);
      break;

    case 1:
      gmus.loop();
      state = 2;
      break;

    case 2:
      game();
      timer++;
      if (timer > maxTimer * 60) {
        timer = 0;
        state = 5;
      }
      break;

    case 3:
      gmus.stop();
      win.loop();
      state = 4;
      break;

    case 4:
      gmus.stop();
      image(win_screen, width / 2, height / 2, 960, 540);
      break;

    case 5:
      gmus.stop();
      lose.loop();
      state = 6;
      break;

    case 6:
      image(lose_screen, width / 2, height / 2, 960, 540);
      break;
  }

}

function mouseReleased() {
  switch (state) {
    case 0:
      title.stop();
      state = 1;
      break;

    case 4: //won;reset the game
      reset();
      gmus.stop();
      win.stop();
      state = -1;
      break;

    case 6: //lost;reset the game
      reset();
      lose.stop();
      state = -1;
      break;
  }
}

function reset() {
  timer = 0;
  cars = [];
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
}

function game() {
  image(game_screen, width / 2, height / 2, 960, 540);

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }

  if (cars.length == 0) {
    state = 4;
  }

  image(yeti, frogPos.x, frogPos.y, 150, 150);
  checkForKeys();
}

//keycodes for AWSD
//A = 65 - left
//W = 87 - up
//S = 83 - down
//D = 68 - right

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;

  if (frogPos.x > width) frogPos.x = 0;
  if (frogPos.x < 0) frogPos.x = width;
  if (frogPos.y > height) frogPos.y = 0;
  if (frogPos.y < 0) frogPos.y = height;
}

class Car {
  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.type = random(1);
  }

  // methods
  display() {
    if (this.type < 0.5) {
      image(icicle, this.pos.x, this.pos.y, 40, 50);
    } else {
      image(snowball, this.pos.x, this.pos.y, 50, 40);
    }
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}

function touchStarted() {
  getAudioContext().resume();
}
