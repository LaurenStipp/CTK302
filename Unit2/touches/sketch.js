let numberOfTouches;

let ant1, ant2, ant3;
let antsq1, antsq2, antsq3;

function setup() {
  createCanvas(400, 400);
  ant1 = loadImage("assets/ant1.png");
  ant2 = loadImage("assets/ant2.png");
  ant3 = loadImage("assets/ant3.png");

  antsq1 = loadImage("assets/antsq1.png");
  antsq2 = loadImage("assets/antsq2.png");
  antsq3 = loadImage("assets/antsq3.png");
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch (numberOfTouches) {
    case 0:
      text("Please squish the ants!\nTap screen to squish the ants ", 5, 22);
      image(ant1, 100, 100, 80, 80);
      image(ant2, 200, 250, 80, 80);
      image(ant3, 10, 200, 80, 80);
      break;

    case 1:
      text("One down", 5, 22);
      image(antsq1, 100, 100, 80, 80);
      image(ant2, 200, 250, 80, 80);
      image(ant3, 10, 200, 80, 80);
      break;

    case 2:
      text("Two down", 5, 22);
      image(antsq1, 100, 100, 80, 80);
      image(antsq2, 200, 250, 80, 80);
      image(ant3, 10, 200, 80, 80);
      break;

    case 3:
      text("All three are down!", 5, 22);
      image(antsq1, 100, 100, 80, 80);
      image(antsq2, 200, 250, 80, 80);
      image(antsq3, 10, 200, 80, 80);
      break;

  }

}
