// take this survey: https://forms.gle/DydYY5s45FQtdmTF8

var bubbles = [];
var Mark;
var Dots;
let places = [];
let lat = 0;
let long = 0;
let num = 0;
let oldLocation = '' ;
let myLocation = "Illinois State University";
let allnames ;

let numberOfTouches;

function preload() {

}

function setup() {
  locationData = getCurrentPosition();
  intervalCurrentPosition(positionPing, 5000);

  pushPlaces();

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1ZbfKqOaJuVfgBeo2z_qvbTsQ6-Fe7vv-Q0cmeKz9Yr4'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(windowWidth, windowHeight);
  // Mark = loadImage("assets/YourMarkBk.png");
  // Dots = loadImage("assets/Dots.png");
  // imageMode(CENTER);
  // f1 = loadFont("assets/VerlagBold.otf");
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  // imageMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console
  allnames = data ;
  makeBubbles() ;
}

function makeBubbles() {
  // iterate through the array of data and create an object and push it on an array called bubbles
  bubbles = [] ;
  let yaxis = 0 ;
  for (let i = 0; i < allnames.length; i++) {
    if (allnames[i].Hint == myLocation) {
      bubbles.push(new Bubble(allnames[i].Name, allnames[i].Major, allnames[i].Quote, allnames[i].Hint, yaxis * 120)); // THESE Name and Shape need to match your column names in your spreadsheet!
      yaxis++ ; // only change the y axis of the next bubble if we found a bubble.
    }
  }
}



function draw() {
  background('#d41f2d');
  // image(Dots, width / 2, height / 2);
  // image(Mark, width / 2, height / 2);

  textAlign(CENTER);
  // textAlign(LEFT);
  // text("lat: " + lat, 10, 340);
  // text("long: " + long, 10, 360);
  // text("number of updates: " + num, 10, 380);

  push();
  textSize(24);
  // iterate through the bubbles and display the objects if their places match myPlace!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].move();
  }
  pop();

  fill('#d41f2d');
  noStroke();
  rect(width / 2, 0, windowWidth, 325);

  fill('black');
  textSize(48);
  text(myLocation, width / 2, 100);  // this prints out the location at the top

}

function positionPing(position) {
  num++;
  background(255);
  lat = position.latitude.toFixed(8);
  long = position.longitude.toFixed(8);

  for (var i = 0; i < places.length; i++) {
    if (places[i].fence.insideFence === true) {
      myLocation = places[i].desc;
      break; //should break out of the for loop?
    }
  }

  if (myLocation != oldLocation) {
    // redo bubble array
    oldLocation = myLocation ;
    makeBubbles() ;
  }
}

// my Bubble class
class Bubble {

  constructor(myName, myMajor, myQuote, myHint, y) {
    this.name = myName ; //.replace(/'/g, ''); // .replace(/'/g,'') strips the apostrophes out
    this.major = myMajor ; //.replace(/'/g, '');
    this.quote = myQuote ; //.replace(/'/g, '');
    this.place = myHint; // .replace(/'/g, '');
    this.pos = createVector(width / 2, y);
    this.vel = createVector(0, -3);
  }


  display() {
    clear();
    numberOfTouches = touches.length;
    text(numberOfTouches + ' touches', width/2,height/2);

    switch(numberOfTouches) {
      case 0:
      text("HI",width/2,height/2);
      break;

      case 1:
      text("HELLO",width/2,height/2);
      break;


    }

    // if (myLocation == this.place) {
    //   fill('white');
    //   textFont(f1);
    //   text(this.name, this.pos.x, this.pos.y - 25);
    //   text(this.major, this.pos.x, this.pos.y);
    //   text(this.quote, this.pos.x, this.pos.y + 25);
    //   text(this.place, this.pos.x, this.pos.y + 50);
    //
    // } else {
    //   fill('grey');
    // }
  }

  move() {
    this.pos.add(this.vel);
    // if (this.pos.x > width) this.pos.x = 0;
    // if (this.pos.x < 0) this.pos.x = width;
    // if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height + 600;
  }

}



function pushPlaces() {
  places.push(new Place(40.19580389554057, -88.41188678700051, "Lauren's House", .02)); // new Place object, for CVA room 17
  places.push(new Place(40.512216613792866, -88.98539072302248, "Rafael's House", .02)); // new Place object, for CVA room 17
  places.push(new Place(40.53556089911177, -88.9757035113809, "Sean's House", .02)); // new Place object, for CVA room 17
  places.push(new Place(40.47859881213726, -88.96815846900026, "Rose's House", .02)); // new Place object, for CVA room 17
  places.push(new Place(40.50622797365503, -88.99051350503431, "CVA 17", .02)); // new Place object, for CVA room 17
  places.push(new Place(40.50715473783438, -88.99173550368103, "COB", .02)); // new Place object, for COB.... JUST SWITCHED TO NEW COORDINATES
  places.push(new Place(40.510824736433904, -88.99134151266699, "ISU College Bridge", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.50863221414712, -88.99077591254148, "Old Union", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.50840289459472, -88.9909118880512, "Williams Hall", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.50844449497366, -88.9911676488728, "Cent 4 Perf Arts", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.50750741811689, -88.99029850463533, "CVA Circle", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.5079598008354, -88.99148671475066, "McCormick Hall", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.50864821960959, -88.99120123764614, "Fell Hall", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.50896516728555, -88.99212919431163, "DeGarmo Hall Solar", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.50917235949953, -88.99177097641105, "Cook Hall", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.50947612369081, -88.99174125561485, "Edwards Hall", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.50980921328644, -88.99149564020013, "Schroeder Hall", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.51014656358694, -88.9912748009074, "Felmley Hall", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.50942119788225, -88.99076697407767, "Moulton Hall", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.50930542714758, -88.99068753755874, "Hovey Hall", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.508730456808415, -88.98572041960726, "University Galleries", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.511676506705506, -88.9938474159579, "Student Services Building", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.51039740494815, -88.9996815241351, "Nelson Smith", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.512969573012896, -88.99488587696477, "Hancock Stadium", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.509699669963155, -88.99664232253424, "Turner Hall", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.512242304908746, -88.99975734818341, "Tri Towers (Haynie)", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.50946288329222, -88.98459824742137, "Uptown Circle", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.47137301266825, -88.94350239220492, "Check Location", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.511276, -88.9911698, "Milner", .02));
  places.push(new Place(40.5087355, -88.9892591, "Stevenson Hall", .02));


}

class Place {
  constructor(lat, long, desc, radius) {
    this.lat = lat;
    this.long = long;
    this.fence = false;
    this.desc = desc;
    this.radius = radius;
    this.fence = new geoFenceCircle(this.lat, this.long, this.radius); //sets geofence location to coordinates
  }


  display() {
    //    image(reggieImg, 10, 10);
    textSize(20);
    text("You are at " + this.desc, 100, 400);
  }
}
