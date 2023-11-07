//apier från https://sunrisesunset.io/api/
const sweUrlDefault = "https://api.sunrisesunset.io/json?lat=59.329&lng=18.068";
const espUrl = "https://api.sunrisesunset.io/json?lat=41.385&lng=2.173";
const argUrl = "https://api.sunrisesunset.io/json?lat=-34.607&lng=-58.437";
const auUrl = "https://api.sunrisesunset.io/json?lat=-33.868&lng=151.209";


//hämtar idn som behövs
let city = document.getElementById('city');
let timeZone = document.getElementById('timezone');
let dayLenght = document.getElementById('day-length');
let sunrise = document.getElementById('sunrise');
let dawn = document.getElementById('dawn');
let sunset = document.getElementById('sunset');
let dusk = document.getElementById('dusk');


//få fram dagens datum
let date = new Date();
date.toLocaleDateString('sv-SE');
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}/${month}-${year}`;
document.getElementById('datum').innerHTML = currentDate;



//fetchar och error hanterar
async function fetchData(url) {
    try {
        let response = await fetch(url);

        if (response.ok === false) {
            throw new Error(`HTTP error code: ${response.status}, HTTP error message: ${response.statusText}`);
        }

        let data = await response.json(); 
    

        //talar om hur den ska bygga koden

        //hittar grund objektet
        let resultsObject = data.results; // får ut hela objektet

        //hittar ett specifikt objekt i grund objektet
        let timeZoneValue = resultsObject.timezone;
        timeZone.innerHTML = timeZoneValue;

        let dayLengthValue = resultsObject.day_length;
        dayLenght.innerHTML = dayLengthValue;

        let sunriseValue = resultsObject.sunrise;
        sunrise.innerHTML = sunriseValue;

        let dawnValue = resultsObject.dawn;
        dawn.innerHTML = dawnValue;

        let sunsetValue = resultsObject.sunset;
        sunset.innerHTML = sunsetValue;

        let duskValue = resultsObject.dusk;
        dusk.innerHTML = duskValue;

        city.innerText = `${cityNames[urlIndex]}`

    } catch (error) {
        console.log(error);
        document.getElementById('error').innerHTML = "OPPS OPPS";
    }
};

//gör så att svenska sidan visas som default
fetchData(sweUrlDefault);



//lösning för blädder funktion med array
//array för mina olika url
let urlArray = [
    sweUrlDefault,
    espUrl,
    argUrl,
    auUrl
];
//array för att koppla namn till varje url
const cityNames = [
    "Stockholm",
    "Madrid",
    "Buenos Aires",
    "Sydney"
];


let urlIndex = 0;

function fetchNext(){
    urlIndex = (urlIndex +1) % urlArray.length;
    fetchData(urlArray[urlIndex]);

    /* if (urlIndex + 1 < urlArray.length) {
        urlIndex += 1;
    } else {
        urlIndex = 0;
    }
    fetchData(urlArray[urlIndex]); */
};

function fetchPrev(){
    urlIndex = (urlIndex -1 + urlArray.length) % urlArray.length;
    fetchData(urlArray[urlIndex]);

    /* if (urlIndex - 1 >= 0) {
        urlIndex -= 1;
    } else {
        urlIndex = urlArray.length - 1;
    }
    fetchData(urlArray[urlIndex]); */
};





//OLIKA LÖSNINGAR FÖR KNAPPARNA
//lösning 2, funkar, bara 2 funktioner
// funktion till switch case
/* function cityInfo(cityName) {
    city.innerText = cityName;

} */


/* let startingUrl = sweUrlDefault; */
/* function fetchNext() {
    switch (startingUrl) {
        case sweUrlDefault:
            startingUrl = espUrl;
            cityInfo("Madrid");
            break;
        case espUrl:
            startingUrl = argUrl;
            cityInfo("Buenos Aires");
            break;
        case argUrl:
            startingUrl = sweUrlDefault;
            cityInfo("Stockholm");
            break;
        default:
            break;
    }

    fetchData(startingUrl);
}

function fetchPrev() {
    switch (startingUrl) {
        case sweUrlDefault:
            startingUrl = argUrl;
            cityInfo("Buenos Aires");
            break;
        case espUrl:
            startingUrl = sweUrlDefault;
            cityInfo("Stockholm");
            break;
        case argUrl:
            startingUrl = espUrl;
            cityInfo("Madrid");
            break;
        default:
            break;
    }

    fetchData(startingUrl);
} */



//lösning som funkar, dock 4 funktioner för 2 knappar
/* let startingUrl = sweUrl;

function nextUrlSwitch(startingUrl) {
    switch (startingUrl) {
        case sweUrl:
            return espUrl;
        case espUrl:
            return argUrl;
        case argUrl:
            return sweUrl;
        default:
            return startingUrl;
    }
}

function prevUrlSwitch(startingUrl) {
    switch (startingUrl) {
        case sweUrl:
            return argUrl;
        case espUrl:
            return sweUrl;
        case argUrl:
            return espUrl;
        default:
            return startingUrl;
    }
}

function fetchNext() {
    startingUrl = nextUrlSwitch(startingUrl);
    fetchData(startingUrl);
}

function fetchPrev() {
    startingUrl = prevUrlSwitch(startingUrl);
    fetchData(startingUrl);
} */