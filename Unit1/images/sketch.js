
let ducky, appa, snuggle;

function setup() {

  createCanvas(800, 800);
  ducky = loadImage("assets/ducky.jpg");
  appa = loadImage("assets/appa.jpg");
  snuggle = loadImage("assets/snuggle.jpg");
  imageMode(CENTER);
}

function draw() {
  background(255,255,255);
  image(appa, width/2, height/2, 300, 200);
  image(ducky, width/2, height/2 - 220, 300, 200);
  image(snuggle, width/2, height/2 + 220, 300, 200);
}
