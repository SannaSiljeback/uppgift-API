//variabler med olika url som man sen kan sätta in i fetchfunctionen för att slippa göra flera olika funktioner
const sweUrl = "https://api.sunrisesunset.io/json?lat=59.329&lng=18.068";
const espUrl = "https://api.sunrisesunset.io/json?lat=41.385&lng=2.173";
const argUrl = "https://api.sunrisesunset.io/json?lat=-34.607&lng=-58.437";
const caUrl = "https://api.sunrisesunset.io/json?lat=45.420&lng=-75.690";
const jpnUrl = "https://api.sunrisesunset.io/json?lat=35.684&lng=139.774";
const nzlUrl = "https://api.sunrisesunset.io/json?lat=-41.288&lng=174.777";
const zaUrl = "https://api.sunrisesunset.io/json?lat=-33.928&lng=18.417";



//gamla sättet att skriva på
/* fetch("https://date.nager.at/api/v3/publicholidays/2023/SE")
.then(res => res.json())
.then(data => console.log(data)) */

//samma som den över men nyare sättet
async function fetchData(url) {
    try {
        let response = await fetch(url);

        if (response.ok === false) {
            throw new Error(`HTTP error code: ${respons.status}, HTTP error message: ${response.statusText}`);
        }

        let data = await response.json();
        console.log(data);

    } catch (error) {
        console.log(error);
        document.getElementById('error').innerHTML = "OPPS OPPS";
    }

    /* return data; */ //behövs en return här?
    
};

function printData() {

};









//fetchar datan med alla våra städer i
fetchData(sweUrl);
fetchData(espUrl);
fetchData(argUrl);
fetchData(caUrl);
fetchData(jpnUrl);
fetchData(nzlUrl);
fetchData(zaUrl);

