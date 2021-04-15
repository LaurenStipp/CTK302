var capture;
var locationData

var options = {
     video: {
         facingMode:"environment"
     }
   };

function preload(){
  locationData = getCurrentPosition();
}

function setup() {
    intervalCurrentPosition(positionPing, 5000) ;
  createCanvas(390, 240);

  capture = createCapture(options);

}

function draw() {

}

function positionPing(position){
  text("lat: " + position.latitude, 10, 40);
  text("long: " + position.longitude, 10, 90);
}


// let locationData;
// let state = 0;
// var capture;
//
// fuction preload(){
//   locationData = getCurrentPosition();
// }
//
// function setup() {
//   createCanvas(displayWidth, displayHeight);
//   locationData = getCurrentPosition();
//   var constraints = {
//     audio: false,
//     video: {
//       facingMode: {
//         exact: "environment"
//       }
//     }
//   };
//   capture = createCapture(constraints);
//
//   capture.hide();
// }
//
// function draw() {
//   switch (state) {
//
//     case 0:
//     move(position);
//     if (position.latitude == '40.510005903343725' && position.longitude == '-88.986901877923') {
//       state = 1;
//     }
//     break;
//
//     case 1:
//     image(capture, 0, 0);
//     break;
//   }
// }
//
// function move(position) {
//   textSize(24) ;
//   background(255) ;
//     text("lat: " + position.latitude, 10, 40);
//     text("long: " + position.longitude, 10, 90);
// }
