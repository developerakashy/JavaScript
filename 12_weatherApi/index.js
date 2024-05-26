
const inputBox = document.querySelector("#input")
const btn = document.querySelector("#btn")

const cityName = document.querySelector("#city-name")
const cityTime = document.querySelector("#city-time")
const cityTemp = document.querySelector("#city-temp")

async function getData(cityName){
    let result = await fetch(`http://api.weatherapi.com/v1/current.json?key=fd308805590a42d688a80333242605&q=${cityName}&aqi=yes
    `)

    return await result.json()
}

btn.addEventListener("click", async ()=>{
    let value = inputBox.value
    let result = await getData(value)
    
    // console.log(result)
    cityName.innerText = `${result.location.country}, ${result.location.region} - ${result.location.name}`
    cityTime.innerText = result.location.localtime
    cityTemp.innerText = result.current.temp_c

})
