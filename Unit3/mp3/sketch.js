let cars = [];
let frogPos;
let state = 0;
let timer = 0;
let maxCars = 5; //changes the # of cars/objects
let maxTimer = 10; //changes the timer ammount

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(600,600);

  // Spawn an object

  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(width/2,height-100);

}

function draw() {
  switch (state) {
    case 0:
    background('pink');
    fill('black');
    text("Welcome",100,100);
    text("Click to begin",100,150);
    //image();
    break;

    case 1:
    game();
    timer++;
    if (timer > maxTimer*60) {
      timer = 0;
      state = 3;
    }
    break;

    case 2:
    background('yellow');
    fill('black');
    text("WINNER",100,100);
    text("Click to play again",100,150);
    break;

    case 3:
    background('red');
    fill('black');
    text("LOSER",100,100);
    text("Click to play again",100,150);
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

function game(){
  background(100);

  // do some actions on the object
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].pos.dist(frogPos)<50) {
      cars.splice(i,1);
    }
  }

  if (cars.length == 0) {
    state = 2;
  }

  checkForKeys();
  fill('green');
  ellipse(frogPos.x,frogPos.y,75,75);
}

//keycodes for AWSD
//A = 65 - left
//W = 87 - up
//S = 83 - down
//D = 68 - right

function checkForKeys(){
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;

  if (frogPos.x > width) frogPos.x = 0;
  if (frogPos.x< 0) frogPos.x = width;
  if (frogPos.y > height) frogPos.y = 0;
  if (frogPos.y < 0) frogPos.y = height;
}

//ignore everything from here down


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
     rect(this.pos.x, this.pos.y, this.width, 25);
    // textSize(this.width) ;
    // text("WOOHOO", this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
