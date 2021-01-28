let f1, f2;
function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  f1 = loadFont("assets/abstractgroovy.ttf");
  f2 = loadFont("assets/powerpuffgirls.ttf");

  textAlign(CENTER);
}

function draw() {
  background(177,156,217);
  textFont(f1,45);
  text("Soft",width/2,height/2);
  textFont(f2,60);
  text("Kitty",width/2,height/2 + 50);
}
