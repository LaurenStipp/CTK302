function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
}

function draw() {
  background(236,248,254);
  noStroke();

  //body
  fill(255, 179, 191);
  if (mouseIsPressed){
    ellipse(width/2,height/2,110,210);
  }else {
     ellipse(230,355,210,110);
  }

  //tail
  push();
  fill(255, 179, 191);
  if (mouseIsPressed) {
    translate(210,360);
    rotate(-30);
    ellipse(0,0,170,50);
  }else {
    translate(130,360);
    rotate(-30);
    ellipse(0,0,170,50);
  }
  pop();

  //legs
  //1st leg from the left
  push();
  fill(255, 179, 191);
  if (mouseIsPressed){
    translate(220, 290);
    rotate(100);
    rect(0,0, 30,60, 30);
  }else {
    translate(150, 375);
    rotate(10);
    rect(0,0, 30, 50, 30);
  }
  pop();

  //2nd leg from the left
  push();
  fill(255, 179, 191);
  if (mouseIsPressed){
    translate(290, 320);
    rotate(250);
    rect(0,0, 30,60, 30);
  }else {
    translate(155, 378);
    rotate(-10);
    rect(0,0, 30, 50, 30);
  }
  pop();

  //3rd leg from the left
  push();
  fill(255, 179, 191);
  if (mouseIsPressed){
    translate(220, 220);
    rotate(110);
    rect(0,0, 30, 55, 30);
  }else {
    translate(260, 379);
    rotate(10);
    rect(0,0, 30, 50, 30);
  }
  pop();


  //4th leg from the left
  push();
  fill(255, 179, 191);
  if (mouseIsPressed){
    translate(330, 200);
    rotate(70);
    rect(0,0, 30,60, 30);
  }else {
    translate(270, 379);
    rotate(-10);
    rect(0,0, 30, 50, 30);
  }
  pop();

  //right thingys
  push();
  fill(255, 128, 147);
  if (mouseIsPressed){
    translate(width/2-60,height/2-125);
    rotate(25);
    ellipse(0,0,90,30);
  }else {
    translate(290,320);
    rotate(25);
    ellipse(0,0,90,30);
  }
  pop();

  push();
  fill(255, 128, 147);
  if (mouseIsPressed){
    translate(width/2-60,height/2-110);
    ellipse(0,0,90,30);
  }else {
    translate(290,345);
    ellipse(0,0,80,30);
  }
  pop();

  push();
  fill(255, 128, 147);
  if (mouseIsPressed){
    translate(width/2-60,height/2-95);
    rotate(-25);
    ellipse(0,0,90,30);
  }else {
    translate(290,370);
    rotate(-25);
    ellipse(0,0,90,30);
  }
  pop();

  //left thingys
  push();
  fill(255, 128, 147);
  if (mouseIsPressed){
    translate(width/2+60,height/2-125);
    rotate(155);
    ellipse(0,0,90,30);
  }else {
    translate(410,320);
  rotate(155);
  ellipse(0,0,90,30);
  }
  pop();

  push();
  fill(255, 128, 147);
  if (mouseIsPressed){
    translate(width/2+60,height/2-110);
    ellipse(0,0,90,30);
  }else {
    translate(410,345);
    ellipse(0,0,80,30);
  }
  pop();

  push();
  fill(255, 128, 147);
  if (mouseIsPressed){
    translate(width/2+60,height/2-95);
    rotate(25);
    ellipse(0,0,90,30);
  }else {
    translate(410,370);
    rotate(25);
    ellipse(0,0,90,30);
  }
  pop();

  //head
  fill(255, 179, 191);
  if (mouseIsPressed){
    ellipse(width/2,150,140,120);
  }else {
    ellipse(350,350,140,120);
  }

  //face
  push();
  fill(0,0,0);
  if (mouseIsPressed){
    ellipse(width/2-30,height/2-100,10,10);
    ellipse(width/2+30,height/2-100,10,10);
    ellipse(width/2,height/2-80,20,10);
    push();
    translate(width/2-5,height/2-81);
    rotate(10);
    ellipse(0,0,20,10);
    pop();
    translate(width/2+5,height/2-81);
    rotate(170);
    ellipse(0,0,20,10);
  }else {
    ellipse(320,350,10,10);
    ellipse(380,350,10,10);
    noFill();
    stroke(0,0,0);
    curve(350,350,380,381,320,380,100,400);
  }
  pop();

  //ground
  if (mouseIsPressed){
    //vent
    fill(211,211,211);
    rect(1,450,500,300);
    fill(200,200,200);
    rect(430,300,100,100);
    triangle(300,450, 550, 450, 430, 300);

    //bubbles
    //blue bubbles
    fill(169,222,249);
    ellipse(400,200,25,25);
    ellipse(440,282,25,25);
    ellipse(490,200,25,25);
    ellipse(70,100,25,25);
    ellipse(90,249,25,25);
    ellipse(480,10,25,25);
    ellipse(260,385,25,25);
    ellipse(53,400,25,25);

    //purple bubbles
    fill(228,193,249);
    ellipse(470,250,25,25);
    // ellipse(350,60,25,25);
    ellipse(117,360,25,25);
    ellipse(29,198,25,25);
    ellipse(311,355,25,25);
    // ellipse(94,30,25,25);
    ellipse(478,79,25,25);
    ellipse(355,259,25,25);
    ellipse(192,430,25,25);
    ellipse(3,66,25,25);

    //yellow bubbles
    fill(252,246,189);
    ellipse(47,308,25,25);
    ellipse(388,287,25,25);
    ellipse(420,112,25,25);
    ellipse(282,430,25,25);
    ellipse(8,432,25,25);
    ellipse(340,10,25,25);
    ellipse(77,157,25,25);
  }else {
    fill(211,211,211);
    rect(1,450,500,300);
  }

  fill(0,0,0);
  if(mouseIsPressed){
  textSize(16);
  text("One day she stumbled upon a stump. \nThen, the stump errupted! It was a vent and it was shooting out \nbubbles. Roza loves bubbles and this is her new place to stay.",15,16);
  }else {
  textSize(16);
  text("Roza is an axlotl who lives in a sad rocky place. \nShe finds no joy because there is no friends or toys to play with.\nShe spends her days just swimming around hoping she will come \nacross something exciting.",15,16);}

}
