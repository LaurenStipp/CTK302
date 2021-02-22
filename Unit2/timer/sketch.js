let myState=0;
let myTimer=0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  switch(myState) {
    case 0:
    background(13,10,11);
    textSize(12);
    myTimer=myTimer+1;
    if (myTimer>3*50){
      myTimer=0;
      myState=1;
    }
    break;

    case 1:
    background(69,73,85);
    myTimer=myTimer+1;
    if (myTimer>3*30){
      myTimer=0;
      myState=2;
    }
    break;

    case 2:
    background(234,239,245);
    myTimer=myTimer+1;
    if (myTimer>3*80){
      myTimer=0;
      myState=0;
    }
    break;
  }
}
