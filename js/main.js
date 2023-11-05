//variabler med olika url som man sen kan sätta in i fetchfunctionen för att slippa göra flera olika funktioner

//url från https://sunrisesunset.io/api/ hemsidan
const sweUrl = "https://api.sunrisesunset.io/json?lat=59.329&lng=18.068";
/* const espUrl = "https://api.sunrisesunset.io/json?lat=41.385&lng=2.173";
const argUrl = "https://api.sunrisesunset.io/json?lat=-34.607&lng=-58.437";
const caUrl = "https://api.sunrisesunset.io/json?lat=45.420&lng=-75.690";
const jpnUrl = "https://api.sunrisesunset.io/json?lat=35.684&lng=139.774";
const nzlUrl = "https://api.sunrisesunset.io/json?lat=-41.288&lng=174.777";
const zaUrl = "https://api.sunrisesunset.io/json?lat=-33.928&lng=18.417"; */

//städerna för urln
//sweUrl = stockholm
//espUrl = barcelona
//argUrl = buenos aires
//caUrl = ottawa
//jpnUrl = tokyo
//nzlUrl = wellington
//zaUrl = kapstaden


//parametrar i apin
//allt ligger inuti results
//sunrise
//sunset
//dusk
//dawn
//golden_hour
//day_length


//hämtar alla idn
let divContainer = document.getElementById('container');

let divCities = document.getElementById('div-cities');
let datum = document.getElementById('datum');
let huvudstad = document.getElementById('huvudstad');
let cities = document.getElementById('cities');
let timeZone = document.getElementById('timezone');
let rightBtn = document.getElementById('right-btn');
let leftBtn = document.getElementById('left-btn');

let divInfo = document.getElementById('divInfo');
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



//gamla sättet att skriva på
/* fetch("https://date.nager.at/api/v3/publicholidays/2023/SE")
.then(res => res.json())
.then(data => console.log(data)) */


//samma som den över men nyare sättet
async function fetchData(url) {
    try {
        let response = await fetch(url);

        if (response.ok === false) {
            throw new Error(`HTTP error code: ${response.status}, HTTP error message: ${response.statusText}`);
        }

        let data = await response.json();
        

        //hittar grund objektet
        let resultsObject = data.results; // får ut hela objektet
        console.log(resultsObject); 
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




    

    } catch (error) {
        console.log(error);
        document.getElementById('error').innerHTML = "OPPS OPPS";
    }

    /* return data; */ //behövs en return här?
    
};




//fetchar datan med alla våra städer i
fetchData(sweUrl);
/* fetchData(espUrl);
fetchData(argUrl);
fetchData(caUrl);
fetchData(jpnUrl);
fetchData(nzlUrl);
fetchData(zaUrl); */

