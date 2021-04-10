/* For mobile phones - accesses accelerometer and gyroscope.
Make sure you turn on orientation lock on your iPhone or Android device. */
//idea: marbles
//jfklej;lkafje;lkajf;e
let alpha = 0, beta = 0 , gamma = 0; // gyroscope variablers
// let bunnyImage;
let omarble;
// let omarble, pimarble, bmarble, ymarble, pumarble;
let xPosition = 0;
let yPosition = 0;
let x = 0, y = 0, z = 0 ; // accelerometer data


function setup() {

  createCanvas(windowWidth, windowHeight);



  // bunnyImage = loadImage("assets/bunny.jpg");
  omarble = loadImage("assets/orange_marble.png");
  // pimarble = loadImage("assets/pink_marble.png");
  // bmarble = loadImage("assets/blue_marble.png");
  // ymarble = loadImage("assets/yellow_marble.png");
  // pumarble = loadImage("assets/purple_marble.png");

  imageMode(CENTER);
  rectMode(CENTER);

}

function draw() {

  background(100); // light blue

  // the map command !!!!
  // takes your variable and maps it from range 1 to range 2
  // map(yourVar, range1_x, range1_y, range2_x, range2_y) ;
  xPosition = map(gamma, -60, 60, 0, width);
  yPosition = map(beta, -30, 30, 0, height);

  push(); // before you use translate, rotate, or scale commands, push and then pop after

  translate(xPosition, yPosition); // move everything over by x, y

  rotate(radians(alpha)); // rotate the bunny depending on the alpha intake

  // image(bunnyImage, 0, 0, 500, 500);
  image(omarble,width/2,height/2,50,50);
  // image(pimarble,0,0,20,20);
  // image(bmarble,20,20,20,20);
  // image(ymarble,60,60,20,20);
  // image(pumarble,5,5,20,20);
  // rect(0, 0, 100, 100) ;
  pop();


  // Text commands that display debugging data
  textAlign(LEFT);
  textSize(20);
  fill('black');
  text("orientation data:", 25, 25);
  textSize(15);
  text("alpha: " + alpha, 25, 50);
  text("beta: " + beta, 25, 70);
  text("gamma: " + gamma, 25, 90);
  textSize(20);
  text("acceleration data:", 25, 125);
  textSize(15);
  text("x = " + x.toFixed(2), 25, 150); // .toFixed means just show (x) decimal places
  text("y = " + y.toFixed(2), 25, 170);
  text("z = " + z.toFixed(4), 25, 190);

  // Text that makes CTK type in the background
  // fill('white');
  // noStroke();
  // textSize(300);
  // textAlign(CENTER);
  // text("ctk", width / 2, height / 2);

}



// Read in gyroscope data
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});

// Read in accelerometer data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});
