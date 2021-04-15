var num ;
var distance;
// let state = 0;
// let time = 0;
let maxTimer = 5;

var capture;
var options = {
     video: {
         facingMode:"environment"
     }
   };

var locationData;
function preload(){

    locationData =  getCurrentPosition();
}

function setup(){
	num = 0 ;
  intervalCurrentPosition(positionPing, 5000) ;
	// createCanvas(displayWidth, displayHeight) ;
  createCanvas(390, 240);

  // capture = createCapture(options);
}

function draw() {
  // switch(state) {
  //   case 0:
  //   background('blue');
  //   fill('white');
  //   text("HELLO",width/2,height/2);
  //
  //   break;
  positionPing(position);
  if (position.latitude == 40.510005903343725 && position.longitude == -88.9869018777923) {
    capture = createCapture(options);
  } else {
    background('blue');
    text("HELLO",width/2,height/2);
  }
  }

function positionPing(position){
	textSize(24) ;
	num++ ;
	background(255) ;
  text("lat: " + position.latitude, 10, 40);
  text("long: " + position.longitude, 10, 90);
	text("number of updates " + num, 10, 140) ;

	distance = calcGeoDistance(locationData.latitude, locationData.longitude, position.latitude, position.longitude, 'mi') ;
	text("you have moved " + distance, 10, 190) ;

}
