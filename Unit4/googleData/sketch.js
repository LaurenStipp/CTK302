var bubbles = [];

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  // let url = '1GtE3eoYVWBv9zMPoyettXzDCEv6qdNGKio_hgEh5duM'; // this is KEY of the URL from the sheet
  let url = '1BPDaxH1Z2aj5lVAn1sRDHCoiYM9kUwyyJXnQgk69qrY';
  //https://docs.google.com/forms/d/e/1FAIpQLScJKKB0JMUb81AbePQjwJ0--53Z2_V-wavHqXTM9tQ3LlRLjA/viewform

  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i].show, data[i].defeat,data[i].theme)); // THESE Name and Shape need to match your column names in your spreadsheet!
  }

}


function draw() {
  background('blue');

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].move();
  }

}


// my Bubble class
class Bubble {

  constructor(myShow, myDefeat, myTheme) {
    this.show = myShow;
    this.defeat = myDefeat;
    this.theme = myTheme;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(5),0);
  }


  display() {
    // if (this.shape == "Square") {
    //   rect(this.pos.x, this.pos.y, 50, 50);
    // } else {
    //   ellipse(this.pos.x, this.pos.y, 50, 50);
    // }
    if (this.show == "WandaVision") {
      push()
      fill('red');
      ellipse(this.pos.x, this.pos.y,80,80);
      pop()
    } else {
      push()
      fill('black');
      rect(this.pos.x, this.pos.y,80,80);
      pop()
    }

    fill('white');
    text(this.show, this.pos.x, this.pos.y-20);
    text(this.defeat, this.pos.x, this.pos.y);
    text(this.theme, this.pos.x, this.pos.y+20);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x =0;
  }

}
