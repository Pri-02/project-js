let curcity="kolkata";
let units="metric";


let city= document.querySelector(`.citybody`)
let datetime= document.querySelector(`.datentime`)
let forecast= document.querySelector(`.weatherforecast`)
let temperature= document.querySelector(`.temp`)
let weathericon= document.querySelector(`.icon`)
let minmax = document.querySelector(".minmax")
let realfeel = document.querySelector('.realfeel');
let humidity = document.querySelector('.humidity');
let wind = document.querySelector('.wind');
let pressure = document.querySelector('.pressure');

document.querySelector(".search").addEventListener('submit', e => {
    let search = document.querySelector(".city");
    e.preventDefault();
    curcity = search.value;
    getweather();
     search.value = ""
})


function convertTimeStamp(timestamp) {
    const date = new Date(timestamp * 1000);
    
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };

    const formattedDate = date.toLocaleString("en-US", options);
     return formattedDate;
}


function convertCountryCode(country){
    let regionNames = new Intl.DisplayNames(["en"], {type: "region"});
    return regionNames.of(country)
}
function getweather() {
    const APIkey = '028afac79a11e61b2bca9ab8b883ef51';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${curcity}&appid=${APIkey}&units=${units}`)
        .then(res => res.json())
        .then(data =>{
    console.log(data)
    city.innerHTML = `${data.name}, ${convertCountryCode(data.sys.country)}`
    datetime.innerHTML = convertTimeStamp(data.dt, data.timezone);
    forecast.innerHTML=`<p>${data.weather[0].main}`
    temperature.innerHTML = `${data.main.temp.toFixed()}&#176`
    weathericon.innerHTML=`<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" />`
    minmax.innerHTML = `<p>Min: ${data.main.temp_min.toFixed()}&#176</p><p>Max: ${data.main.temp_max.toFixed()}&#176</p>`
    realfeel.innerHTML = `${data.main.feels_like.toFixed()}&#176`
    humidity.innerHTML = `${data.main.humidity}%`
    wind.innerHTML = `${data.wind.speed} ${units === "imperial" ? "mph": "m/s"}` 
    pressure.innerHTML = `${data.main.pressure} hPa`
})
        .catch(error => console.error('Error fetching weather:', error));
   
}

document.addEventListener('DOMContentLoaded', function () {
    getweather(); 
});
