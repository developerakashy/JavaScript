const btn = document.querySelector('#get-location')

const cityName = document.querySelector("#city-name")
const cityTemp = document.querySelector("#city-temp")
const highTemp = document.querySelector("#high-temp")
const lowTemp = document.querySelector("#low-temp")
const humidityText = document.querySelector("#humidity")
const pressureText = document.querySelector("#pressure")
const feelsLike = document.querySelector("#feels-like")

async function getData(lat, lon){
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f4b578228473c9a6010cf190aaef9e85&units=metric`)
    return await result.json()
}

async function gotLocation(position){
    const {longitude, latitude} = position.coords
    const weather = await getData(latitude, longitude)
    showData(weather.main, weather.sys.country, weather.name)
    // pressureText.innerText = pressure
    console.log(weather)
}

function showData(main, country, name){
    cityName.innerText = country + ', ' + name
    highTemp.innerHTML = main.temp_max + " &deg;C"
    lowTemp.innerHTML = main.temp_min + " &deg;C"
    feelsLike.innerHTML = main.feels_like + " &deg;C"
    cityTemp.innerHTML = main.temp + " &deg;C"
    humidityText.innerText = main.humidity + " %"
    pressureText.innerText = main.pressure + " Pa"

}

function failedToGetLocation(){
    console.log("An issue occured")
}

btn.addEventListener('click', ()=>{
    navigator.geolocation.getCurrentPosition(gotLocation, failedToGetLocation)
})