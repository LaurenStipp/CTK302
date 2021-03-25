let cars = [];
let frogPos;
let state = 0;
let timer = 0;
let maxCars = 5; //changes the # of cars/objects
let maxTimer = 10; //changes the timer ammount

let title_screen, game_screen, win_screen, lose_screen;
let icicle, snowball;
let yeti;

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
  // Spawn an object

  for (let i = 0; i < 40; i++) {
    cars.push(new Car());
  }

frogPos = createVector(width / 2, height - 100);

}

function draw() {
  switch (state) {
    // case -1:
    // title.loop();
    // state = 0;
    // break;

    case 0:
      image(title_screen, width / 2, height / 2, 960, 540);
      break;

    case 1:
      game();
      timer++;
      if (timer > maxTimer * 60) {
        timer = 0;
        state = 3;
      }
      break;

    case 2:
      image(win_screen, width / 2, height / 2, 960, 540);
      break;

    case 3:
      image(lose_screen, width / 2, height / 2, 960, 540);
      break;
  }
}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 2: //won;reset the game
      state = 0;
      reset();
      break;

    case 3: //lost;reset the game
      state = 0;
      reset();
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

  // for (let i = 0; i < cars.length; i++) {
  //   cars[i].display();
  //   cars[i].move();
  // }
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].a <=0 ){
      cars.splice(i, 1);
    }
  }

  if (cars.length == 0) {
    state = 2;
  }

  checkForKeys();
  image(yeti, frogPos.x,frogPos.y,100,100);
}

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

// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.col = color(random(255), random(255), random(255));
    this.width = random(30, 70);
  }

  // methods

  display() {
    fill(this.col);
    //  rect(this.pos.x, this.pos.y, this.width, 25);
    textSize(this.width) ;
    text("WOOHOO", this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
