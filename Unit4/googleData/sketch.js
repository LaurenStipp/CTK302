//wanted to do a counter but couldn't figure out where to put it where it just kept looping

var bubbles = [];
//fonts
let arm, ref,op;

//background
let marvel;

//tvs
let tv50,tv60,tv70,tv80,tv90,tv00;

//symbols
let yesScore=0;
let noScore=0;

let no;
let yes;
//red #F0131E
//white #FFFFFF

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
  // createCanvas(1520,950);
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  // ellipseMode(CENTER);
  rectMode(CENTER);

  arm = loadFont("assets/armstrong.otf");
  ref = loadFont("assets/refrigerator.otf");
  op = loadFont("assets/op.ttf");

  marvel = loadImage("assets/background.jpg");

  //all tvs are png!!
  tv50 = loadImage("assets/50tv.png");
  tv60 = loadImage("assets/60tv.png");
  tv70 = loadImage("assets/70tv.png");
  tv80 = loadImage("assets/80tv.png");
  tv90 = loadImage("assets/90tv.png");
  tv00 = loadImage("assets/00tv.png");

  //symbols
  yes = loadImage("assets/us_agent_sym.png");
  no = loadImage("assets/bucky_sam_sym.png");
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
  // image(marvel,0,0, 760,475);
  image(marvel,0,0, windowWidth,windowHeight);
  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].move();
  }

  push();
  textFont(op,50);
  text("Take the survey to see your response!",width/2,height/2-300);
  pop();
  push();
  textFont(op,20);
  text("(Right-click SURVEY below to open in new tab)",width/2,height/2-270);
  pop();
  push();
  // textFont(op,30);
  let a = createA('https://docs.google.com/forms/d/e/1FAIpQLScJKKB0JMUb81AbePQjwJ0--53Z2_V-wavHqXTM9tQ3LlRLjA/viewform', "Survey","_blank");
  a.position(width/2-87,height/2-270);
  a.style('font-size','60px');
  // a.style('font-family',op);
  a.style('color','white');
  a.style('text-decoration','none');
  // text("Copy the link below:",width/2,height/2+160);
  // text("https://docs.google.com/forms/d/e/1FAIpQLScJKKB0JMUb81AbePQjwJ0--53Z2_V-wavHqXTM9tQ3LlRLjA/viewform",width/2,height/2+200);
  pop();
}


// my Bubble class
class Bubble {

  constructor(myShow, myDefeat, myTheme) {
    this.show = myShow;
    this.defeat = myDefeat;
    this.theme = myTheme;
    this.pos = createVector(random(width),random(height));
    this.vel = createVector(random(5),0);
  }


  display() {
    if (this.show == "WandaVision") {
      push()
      noStroke();
      // fill('red');
      // ellipse(this.pos.x, this.pos.y,80,80);
      if (this.theme == "50's") {
        image(tv50,this.pos.x-90,this.pos.y-80,180,220);
      } else if (this.theme == "60's") {
        image(tv60,this.pos.x-100,this.pos.y-80,240,150);
      } else if (this.theme == "70's") {
        image(tv70,this.pos.x-100,this.pos.y-80,240,150);
      } else if (this.theme == "80's") {
        image(tv80,this.pos.x-90,this.pos.y-80,240,150);
      } else if (this.theme == "90's") {
        image(tv90,this.pos.x-90,this.pos.y-80,170,150);
      } else if (this.theme == "00's") {
        image(tv00,this.pos.x-90,this.pos.y-80,240,150);
      }
      pop()
    } else if (this.show  == "The Falcon and the Winter Soldier") {
      push()
      noStroke();
      // fill('red');
      // ellipse(this.pos.x, this.pos.y,80,80);
      if (this.theme == "50's") {
        image(tv50,this.pos.x-90,this.pos.y-80,180,220);
      } else if (this.theme == "60's") {
        image(tv60,this.pos.x-100,this.pos.y-80,240,150);
      } else if (this.theme == "70's") {
        image(tv70,this.pos.x-100,this.pos.y-80,240,150);
      } else if (this.theme == "80's") {
        image(tv80,this.pos.x-90,this.pos.y-80,240,150);
      } else if (this.theme == "90's") {
        image(tv90,this.pos.x-90,this.pos.y-80,170,150);
      } else if (this.theme == "00's") {
        image(tv00,this.pos.x-120,this.pos.y-80,240,150);
      }
      pop()
    } else {
      push()
      noStroke();
      if (this.theme == "50's") {
        image(tv50,this.pos.x-90,this.pos.y-80,180,220);
      } else if (this.theme == "60's") {
        image(tv60,this.pos.x-100,this.pos.y-80,240,150);
      } else if (this.theme == "70's") {
        image(tv70,this.pos.x-100,this.pos.y-80,240,150);
      } else if (this.theme == "80's") {
        image(tv80,this.pos.x-90,this.pos.y-80,240,150);
      } else if (this.theme == "90's") {
        image(tv90,this.pos.x-90,this.pos.y-80,170,150);
      } else if (this.theme == "00's") {
        image(tv00,this.pos.x-120,this.pos.y-80,240,150);
      }
      pop()
    }

    if (this.defeat == "Yes") {
      textFont(op,14);
      // scoreSystem();
      // text(yesScore,width/2,height/2);
      // yesScore +=1;
      // image(yes, width/2,height/2, 20,20);
      // textFont(op,14);
      text(this.defeat, this.pos.x, this.pos.y);
      image(yes, this.pos.x-30,this.pos.y-15, 20,20);
    } else if (this.defeat == "No") {
      textFont(op,14);
      text(this.defeat, this.pos.x, this.pos.y);
      image(no, this.pos.x+10,this.pos.y-15, 20,20);
    } else {
      textFont(op,14);
      text(this.defeat, this.pos.x, this.pos.y);
    }

    fill('white');
    if (this.show == "WandaVision") {
      textFont(arm,20);
      text(this.show, this.pos.x, this.pos.y-20);
    } else if (this.show == "The Falcon and the Winter Soldier") {
      textFont(ref,15);
      text(this.show, this.pos.x, this.pos.y-20);
    } else {
      textFont(op,14);
      text(this.show, this.pos.x, this.pos.y-20);
    }

    // text(this.show, this.pos.x, this.pos.y-20);
    // push();
    // textFont(op,14);
    // text(this.defeat, this.pos.x, this.pos.y);
    // pop();
    push();
    textFont(op,14);
    text(this.theme, this.pos.x, this.pos.y+20);
    pop();

  }

  move() {
    //This option will not move
    this.pos.add(this.vel);
    if (this.show == "Have Not Seen Either") {
      this.vel = 0;
    }

    if (this.pos.x >width){
      this.pos.x = 0;
    }

    //This option will travel right to left
    if (this.show == "The Falcon and the Winter Soldier") {
      this.pos.x = this.pos.x - 4;
      if (this.pos.x < width-800) {
        this.pos.x = width;
        this.pos.x = this.pos.x-4;
      }
    }
  }
}
