//http://api.openweathermap.org/data/2.5/weather?q=flagstaff,az,us&units=imperial&appid=051def393b3bfe79f24932eeb00848d0
// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0 ;
var temp;
// var desc;



function setup() {
  createCanvas(400, 400);

  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=sacramento,case,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=051def393b3bfe79f24932eeb00848d0'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString ;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temp = weather.main.temp;
  lat = weather.coord.lat;
  lon = weather.coord.lon;




}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background(200);
      fill('black');
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("windspeed is " + windspeed, 20, 40);
      text("temperature is " + temp, 20,60);
      // text("description" + desc, 20,80);
      text("Coordinates are " + lat + ", " + lon, 20,80);


      // cloud
      fill('white');
      noStroke();
      ellipse(x, 300, 200, 100);

      //thermometer
      fill('red');
      var t = map(temp,-10,100,10, height-10);
      rect(width-50,height-10,30,-t);

      // move the cloud's x position
      x = x + windspeed / 4;
      if (x > width) x = 0;

      break;

  }
}
