//variabler med olika url som man sen kan sätta in i fetchfunctionen för att slippa göra flera olika funktioner

//url från https://sunrisesunset.io/api/ hemsidan
const sweUrlDefault = "https://api.sunrisesunset.io/json?lat=59.329&lng=18.068";
const espUrl = "https://api.sunrisesunset.io/json?lat=41.385&lng=2.173";
const argUrl = "https://api.sunrisesunset.io/json?lat=-34.607&lng=-58.437";
const auUrl = "https://api.sunrisesunset.io/json?lat=-33.868&lng=151.209";
/* const caUrl = "https://api.sunrisesunset.io/json?lat=45.420&lng=-75.690";
const jpnUrl = "https://api.sunrisesunset.io/json?lat=35.684&lng=139.774";
const nzlUrl = "https://api.sunrisesunset.io/json?lat=-41.288&lng=174.777";
const zaUrl = "https://api.sunrisesunset.io/json?lat=-33.928&lng=18.417";
 */


//städerna för urln
//sweUrl = stockholm
//espUrl = barcelona
//argUrl = buenos aires
//auUrl = sydney
//caUrl = ottawa
//jpnUrl = tokyo
//nzlUrl = wellington
//zaUrl = kapstaden


//hämtar alla idn
let divContainer = document.getElementById('container');

let divCities = document.getElementById('div-cities');
let datum = document.getElementById('datum');
let huvudstad = document.getElementById('huvudstad');
let cities = document.getElementById('cities');
let timeZone = document.getElementById('timezone');
let rightBtn = document.getElementById('right-btn');
let leftBtn = document.getElementById('left-btn');

let divInfo = document.getElementById('div-info');
let divDayLength = document.getElementById('div-dayLength');
let pDayLenght = document.getElementById('day-length');
let divSunrise = document.getElementById('div-sunrise');
let pSunrise = document.getElementById('sunrise');
let pDawn = document.getElementById('dawn');
let divSunset = document.getElementById('div-sunset');
let pSunset = document.getElementById('sunset');
let pdusk = document.getElementById('dusk');


//få fram dagens datum
const date = new Date();
date.toLocaleDateString('sv-SE');

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}/${month}-${year}`;

document.getElementById('datum').innerHTML = currentDate;


// för att göra data global, behövs det??
let data = "";



//fetchar och error hanterar
async function fetchData(url) {
    try {
        let response = await fetch(url);

        if (response.ok === false) {
            throw new Error(`HTTP error code: ${response.status}, HTTP error message: ${response.statusText}`);
        }

        data = await response.json(); //data funkar inte, varför?
        /* return data;  *///behövs en return här?


        //talar om hur den ska bygga koden

        //hittar grund objektet
        let resultsObject = data.results; // får ut hela objektet

        //hittar ett specifikt objekt i grund objektet
        let timeZoneValue = resultsObject.timezone;
        timeZone.innerHTML = timeZoneValue;

        let dayLengthValue = resultsObject.day_length;
        pDayLenght.innerHTML = dayLengthValue;

        let sunriseValue = resultsObject.sunrise;
        pSunrise.innerHTML = sunriseValue;

        let dawnValue = resultsObject.dawn;
        pDawn.innerHTML = dawnValue;

        let sunsetValue = resultsObject.sunset;
        pSunset.innerHTML = sunsetValue;

        let duskValue = resultsObject.dusk;
        pdusk.innerHTML = duskValue;

        huvudstad.innerText = `${cityNames[startingIndex]}`
    

    } catch (error) {
        console.log(error);
        document.getElementById('error').innerHTML = "OPPS OPPS";
    }
    
};


//lösning för blädder funktion med array
//array för olika url
let urlArray = [
    sweUrlDefault,
    espUrl,
    argUrl,
    auUrl
]
//array för att koppla namn till varje url
let cityNames = [
    "Stockholm",
    "Madrid",
    "Buenos Aires",
    "Sydney"
]


let startingIndex = 0;

//gör så att svenska sidan visas som default
fetchData(sweUrlDefault);


function fetchNext(){
    /* startingIndex = (startingIndex +1) % urlArray.length;
    fetchData(urlArray[startingIndex]); */
    if (startingIndex + 1 < urlArray.length) {
        startingIndex += 1;
    } else {
        startingIndex = 0;
    }
    fetchData(urlArray[startingIndex]);
}

function fetchPrev(){
    /* startingIndex = (startingIndex -1 + urlArray.length) % urlArray.length;
    fetchData(urlArray[startingIndex]); */
    if (startingIndex - 1 >= 0) {
        startingIndex -= 1;
    } else {
        startingIndex = urlArray.length - 1;
    }
    fetchData(urlArray[startingIndex]);
}






//OLIKA LÖSNINGAR FÖR KNAPPARNA
//lösning 4, funktar, bara 2 funktioner
/* function fetchNext() {
    switch (startingUrl) {
        case sweUrl:
            startingUrl = espUrl;
            break;
        case espUrl:
            startingUrl = argUrl;
            break;
        case argUrl:
            startingUrl = sweUrl;
            break;
        default:
            break;
    }

    fetchData(startingUrl);
}

function fetchPrev() {
    switch (startingUrl) {
        case sweUrl:
            startingUrl = argUrl;
            break;
        case espUrl:
            startingUrl = sweUrl;
            break;
        case argUrl:
            startingUrl = espUrl;
            break;
        default:
            break;
    }

    fetchData(startingUrl);
}
 */


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





//fetchar datan med alla våra städer i
/* fetchData(sweUrl); */
/* fetchData(espUrl);
fetchData(argUrl); */
/* fetchData(caUrl);
fetchData(jpnUrl);
fetchData(nzlUrl);
fetchData(zaUrl); */

