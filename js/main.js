//apier från https://sunrisesunset.io/api/
const sweUrlDefault = "https://api.sunrisesunset.io/json?lat=59.329&lng=18.068";
const espUrl = "https://api.sunrisesunset.io/json?lat=41.385&lng=2.173";
const argUrl = "https://api.sunrisesunset.io/json?lat=-34.607&lng=-58.437";
const auUrl = "https://api.sunrisesunset.io/json?lat=-33.868&lng=151.209";

//hämtar idn som behövs
let city = document.getElementById("city");
let timeZone = document.getElementById("timezone");
let dayLenght = document.getElementById("day-length");
let sunrise = document.getElementById("sunrise");
let dawn = document.getElementById("dawn");
let sunset = document.getElementById("sunset");
let dusk = document.getElementById("dusk");

//får fram dagens datum
let date = new Date();
date.toLocaleDateString("sv-SE");
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}/${month}-${year}`;
document.getElementById("datum").innerHTML = currentDate;

//fetchar data och error hanterar
async function fetchData(url) {
  try {
    let response = await fetch(url);

    if (response.ok === false) {
      throw new Error(
        `HTTP error code: ${response.status}, HTTP error message: ${response.statusText}`
      );
    }
    let data = await response.json();

    //hittar grund objektet i apit
    let resultsObject = data.results;

    //hittar de specifika objekten inuti grund objektet
    let timeZoneValue = resultsObject.timezone;
    let timeZoneValueBr = timeZoneValue.replace("America/", "");
    timeZone.innerHTML = timeZoneValueBr;

    let dayLengthValue = resultsObject.day_length;
    let dayLengthValueTim = dayLengthValue + "<br>TIM";
    dayLenght.innerHTML = dayLengthValueTim;

    let sunriseValue = resultsObject.sunrise;
    let sunriseValueBr = sunriseValue.replace("AM", "<br>AM");
    sunrise.innerHTML = sunriseValueBr;

    let dawnValue = resultsObject.dawn;
    let dawnValueBr = dawnValue.replace("AM", "<br>AM");
    dawn.innerHTML = dawnValueBr;

    let sunsetValue = resultsObject.sunset;
    let sunsetValueBr = sunsetValue.replace("PM", "<br>PM");
    sunset.innerHTML = sunsetValueBr;

    let duskValue = resultsObject.dusk;
    let duskValueBr = duskValue.replace("PM", "<br>PM");
    dusk.innerHTML = duskValueBr;

    city.innerText = `${cityNames[urlIndex]}`;
  } catch (error) {
    console.log(error);
    document.getElementById("error").innerHTML =
      "Ett oväntat fel uppstod. Vänligen försök igen senare";
  }
}

//gör att svenska sidan visas som default
fetchData(sweUrlDefault);

//array för de olika url
let urlArray = [sweUrlDefault, espUrl, argUrl, auUrl];

//array för att koppla huvudstad till varje url
const cityNames = ["Stockholm", "Madrid", "Buenos Aires", "Sydney"];

//lösning för kunna bläddra genom apierna med knapparna
let urlIndex = 0;

function fetchNext() {
  urlIndex = (urlIndex + 1) % urlArray.length;
  fetchData(urlArray[urlIndex]);
}

function fetchPrev() {
  urlIndex = (urlIndex - 1 + urlArray.length) % urlArray.length;
  fetchData(urlArray[urlIndex]);
}
