let cars = [];
let wanda;
//image not mine; by Marvel Studios

function setup() {
  createCanvas(1200,667);
  wanda = loadImage("assets/wanda.jpg");
  imageMode(CENTER);
  textAlign(CENTER);

  // for (let i = 0; i < 40; i++) {
  //   cars.push(new Car());
  // }


}

function draw() {
  // background('red');
  image(wanda, width/2, height/2, 1200,667);
  cars.push(new Car());


  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].a <=0 ){
      cars.splice(i, 1);
    }
  }
}



// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(1050,620);
    // this.vel = createVector(0, random(-1,-80));
    this.vel = createVector(random(-200,10),random(-20,-40));
    this.r = 255;
    this.g = 0;
    this.b = 0;
    this.a = random(200,255);
    // this.col = color(255,255,255,this.a);
    this.width = random(30,50) ;
  }

  // methods

  display() {
    // fill(this.col);
    fill(this.r,this.g,this.b,this.a);
    // ellipse(this.pos.x,this.pos.y,30);
    // rect(this.pos.x, this.pos.y, this.width, 25);
    textSize(this.width);
    text("WandaVision",this.pos.x,this.pos.y);
  }

  move() {
    this.pos.add(this.vel) ;
    this.a = this.a - 20;
    // if (this.pos.x > width) this.pos.x = 0 ;
    // if (this.pos.x < 0) this.pos.x = width ;
    // if (this.pos.y > height) this.pos.y = 0 ;
    // if (this.pos.y < 0) this.pos.y = height ;

  }

}
