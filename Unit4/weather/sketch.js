//http://api.openweathermap.org/data/2.5/weather?q=flagstaff,az,us&units=imperial&appid=051def393b3bfe79f24932eeb00848d0
// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0 ;
var temp;
var f1;
// var desc;



function setup() {
  createCanvas(400, 400);
  // textSize(20);
  f1 = loadFont("assets/staatliches.ttf");

  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=osaka,case,US&units=imperial&';

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
  feel = weather.main.feels_like;
  lat = weather.coord.lat;
  lon = weather.coord.lon;
  hum = weather.main.humidity;




}


function draw() {
  textFont(f1,20);
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
      // text("windspeed is " + windspeed, 20, 40);
      text("Temperature is " + temp, 20,50);
      text("Feels like " + feel, 20,80);
      // text("description" + desc, 20,80);
      text("Coordinates are " + lat + ", " + lon, 20,110);
      text("Humidity is " + hum, 20,140);


      // cloud
      fill('white');
      noStroke();
      ellipse(x, 300, 200, 100);

      // //thermometer
      // fill('red');
      // var t = map(temp,-10,100,10, height-10);
      // rect(width-50,height-10,30,-t);

      //humidity
      // rect(160,124, 50,20);
      if( hum >= 70) {
        push()
        fill('#d00000');
        rect(160,120, 90,25);
        pop()
        push();
        fill('#F5F5F5');
        textFont(f1,15);
        // textSize(12);
        text("High Humidity",168,136);
        pop();
      } else if (hum < 70 && hum >= 60 ) {
        push()
        fill('#ffba08');
        rect(160,124, 50,20);
        pop()
        push();
        fill('black');
        textFont(f1,15);
        text("Fair",173,139);
        pop();
      } else if (hum < 60 && hum >=30) {
        push()
        fill('#95BF8F');
        rect(160,124, 50,20);
        pop()
        push();
        fill('#F5F5F5');
        textFont(f1,15);
        // textSize(12);
        text("Ideal",171,138);
        pop();
      } else if (hum < 30 && hum >=25) {
        push()
        fill('#ffba08');
        rect(160,124, 50,20);
        pop()
        push();
        fill('black');
        textFont(f1,15);
        // textSize(12);
        text("Fair",173,139);
        pop();
      } else  {
        push()
        fill('#d00000');
        rect(160,124, 50,20);
        pop()
        push();
        fill('#F5F5F5');
        textFont(f1,15);
        // textSize(12);
        text("Low Humidity",168,136);
        pop();
      }


      // move the cloud's x position
      x = x + windspeed / 4;
      if (x > width) x = 0;

      break;

  }
}
