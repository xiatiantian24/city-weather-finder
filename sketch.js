var w = window.innerWidth;
var h = window.innerHeight;

var weather;
var api = "https://api.openweathermap.org/data/2.5/weather?";
var units = "&units=imperial";
var APIkey = "&appid=ca7caccfa515826d1bc1bc37590f135b";

var stars = [];
var speed = 2;

//api var

var temp;
var speed;
var humidity;
var pressure;
var modPressure;

var error = false;

var input; // Declare input variable
let t = 0;
var weatherInfo = "Enter a destination above to get weather data";

function setup() {
  createCanvas(windowWidth, windowHeight);
  input = select("#city");

  // var button = select('#submit');
  // button.mousePressed(weatherAsk);
  //create starts
  for (var i = 0; i < 300; i++) {
    stars[i] = new Star();
  }
}

function weatherAsk() {
  var url = api + "q=" + input.value() + APIkey + units;
  loadJSON(url, gotData, (err) => {
    // console.log(err);
    // console.log(input.value() + " is not a valid location");
    error = true;
  });
  var locationInput = document.getElementById("city");
  locationInput.style.border = "none";
}

function gotData(data) {
  // also set variables
  console.log(data);

  weather = data;
  error = false;

  if (weather) {
    // establish global variables
    temp = weather.main.temp;
    feelsLike = weather.main.feels_like;
    speed = weather.wind.speed;
    humidity = weather.main.humidity;
    clouds = weather.clouds.all;
    pressure = weather.main.pressure;
    modPressure = pow(pressure - 900, 3);

    // Creating a string representation of the weather data
    weatherInfo = `Temperature: ${temp}&deg;F<br>
    Wind Speed: ${speed} mph<br>
    Humidity: ${humidity}%<br>
    Pressure: ${pressure} hPa<br>`;
  }
}

function defaultPattern() {
  // Set background to white
  background("#fff");
  stroke("#fff");
  // Translate to the center of the canvas
  // translate(width / 2, height / 2);
  speed = 1;

  // Draw stars
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show(0);
  }
}

function draw() {
  clear();
  background("#fff");
  stroke("#fff");
  // Translate to the center of the canvas
  translate(width / 2, height / 2);

  // Draw stars
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show(0);
  }

  if (weather) {
    // var color = colorFunction(temp);
    // colorMode(HSB);\

    clear();

    var col = colorUpdate(temp);

    background(col[0]);

    stroke(col[1]);

    for (var i = 0; i < stars.length; i++) {
      stars[i].update();
      stars[i].show(col[1]);
    }

    var modHumidity = map(humidity, 0, 100, 5, 50);

    for (let i = 0; i < modHumidity; i++) {
      // how many lines are generated - humidity
      line(x1(t + i), y1(t + i), x2(t + i), y2(t + i));
    }

    t += 0.03 * speed + 0.005;

    // colorUpdate();
  }

  if (error) {
    clear();
    defaultPattern();
    weatherInfo = "Enter a destination above to get weather data";

  }

  document.getElementById("data").innerHTML = weatherInfo;

}

//radius

function x1(t) {
  return sin(t / 10) * (pressure - 950);
}

function y1(t) {
  return cos(t / 10) * (pressure - 950);
}

function x2(t) {
  return (
    sin(t / 15) * pressure + sin(t / 25) * pressure + sin(t / 35) * pressure
  ); // length of the lines
}

function y2(t) {
  return (
    cos(t / 15) * pressure + cos(t / 25) * pressure + cos(t / 35) * pressure
  );
}
