//http://api.openweathermap.org/data/2.5/weather?q=flagstaff,az,us&units=imperial&appid=051def393b3bfe79f24932eeb00848d0
// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
// var x = 0;
// var windspeed = 0 ;
var temp;
var f1;
var sunny,tstorm,rain,fclouds,bclouds,srain,snow,fog,sclouds;



function setup() {
  createCanvas(800,600);
  // textSize(20);
  f1 = loadFont("assets/staatliches.ttf");

  sunny = loadImage("assets/sunny.png");
  tstorm = loadImage("assets/thunderstorm.png");
  rain = loadImage("assets/rain.png");
  fclouds = loadImage("assets/few_clouds.png");
  bclouds = loadImage("assets/broken_clouds.png");
  srain = loadImage("assets/shower_rain.png");
  snow = loadImage("assets/snow.png");
  fog = loadImage("assets/fog.png");
  sclouds = loadImage("assets/scattered_clouds.png");
  noStroke();
  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Kawasaki,case,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=051def393b3bfe79f24932eeb00848d0'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString ;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

}

function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  // windspeed = weather.wind.speed;
  // temp = weather.main.temp;
  // feel = weather.main.feels_like;
  // lat = weather.coord.lat;
  // lon = weather.coord.lon;
  // hum = weather.main.humidity;
  high = weather.main.temp_max;
  low = weather.main.temp_min;
  desc = weather.weather[0].description;

  // condition = weather.weather[0].main;
  id = weather.weather[0].id;
}


function draw() {
  textFont(f1,25);
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background(500);
      // image(back,0,0,1920,960);
      fill('#141414');
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("The high for Today is " + high, 20,50);
      text("The low for Today is " + low, 20,80);
      // text("Coordinates are " + lat + ", " + lon, 20,110);
      // text("Humidity is " + hum + "%" ,20,140);
      text("Current weather: " + desc, 20,110);


      // cloud
      // fill('white');
      // noStroke();
      // ellipse(x, 300, 200, 100);

      // //thermometer for high and low temp
      push();
      fill('#F05D5E');
      var t = map(high,-10,100,200, height-10);
      rect(width-100,height-25,30,-t);
      pop();
      push();
      fill('#058ED9');
      var t2 = map(low,-10,100,10, height-10);
      rect(width-50,height-25,30,-t2);
      pop();

      text("High",width-103,height-3);
      text("Low",width-53,height-3);

      //weather conditions
      //200-232 = thunderstorm.png
      //300-321 = drizzle.png
      //500-531 = rain.png
      //600-622 = snow.png
      //701-762 = mist.png
      //771 = squall.png (strong winds)
      //781 = tornado.png
      //800 = clear
      //801 = fewclouds.png
      //802 = scatteredclouds.png
      //803 = brokenclouds.png
      //804 = overcastclouds.png
      if (id >= 200 && id <= 232) {
        image(tstorm,width/2-240,height/2-50, 350,250);
      } else if (id >= 300 && id <= 321) {
        image(srain,width/2-240,height/2-50, 350,250);
      } else if (id >= 500 && id <= 504 || (id >=520 && id <=531)) {
        image(rain,width/2-240,height/2-50, 350,250);
      } else if (id == 511) {
        image(snow,width/2-240,height/2-50, 350,250);
      } else if (id >=600 && id <= 622) {
        image(snow,width/2-240,height/2-50, 350,250);
      } else if (id >701 && id <=781){
        image(fog,width/2-240,height/2-50, 350,250);
      } else if (id == 801) {
        image(fclouds,width/2-240,height/2-50, 350,250);
      } else if (id == 802) {
        image(sclouds,width/2-240,height/2-50, 350,250);
      } else if (id == 803 || id == 804) {
        image(bclouds,width/2-240,height/2-50, 350,250);
      } else {
        image(sunny,width/2-240,height/2-80, 350,300);
      }



      break;

  }
}
