let state = 0;
let timer = 0;
let x = 0;
let velocity = 3;

function setup() {
  createCanvas(700,700);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

function draw() {
  background(255);
  fill('yellow');
  rect(width/2, height/2, 200, 450);

  //car
  fill('purple');
  rect(x,650, 90 ,25);
  x = x + velocity;
  if (x > width){
    x = 0;
  }

  switch(state) {

    //red
    case 0:
    // text("state 0",100,100);
    fill('red');
    ellipse(width/2, height/2-150, 120,120);
    fill('grey');
    ellipse(width/2, height/2, 120,120);
    ellipse(width/2, height/2+150, 120,120);
    velocity = 0;
    break;

    //green
    case 1:
    // text("state 1",100,100);
    fill('grey');
    ellipse(width/2, height/2-150, 120,120);
    fill('grey');
    ellipse(width/2, height/2, 120,120);
    fill('green');
    ellipse(width/2, height/2+150, 120,120);
    velocity = 6;
    break;

    //yellow
    case 2:
    // text("state 2",100,100);
    fill('grey');
    ellipse(width/2, height/2-150, 120,120);
    fill('yellow');
    ellipse(width/2, height/2, 120,120);
    fill('grey');
    ellipse(width/2, height/2+150, 120,120);
    velocity = 3;
    break;
  }

  timer = timer + 1;
  if (timer > 100){
    timer = 0;
    state=state + 1;
    if (state > 2){
      state = 0;
    }
  }


}

// function mouseReleased(){
//   state=state + 1;
//   if (state > 2){
//     state = 0;
//   }
// }
