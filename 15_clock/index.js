const time = document.querySelector("#time")
const stopBtn = document.querySelector("#stop")
const startBtn = document.querySelector("#start")
const resetBtn = document.querySelector("#reset")
const inputs = document.querySelectorAll('input')
let timer = null
let timerInProgress = false


// let timer = setInterval(showTime, 1000)

stopBtn.addEventListener('click', ()=>{
    event.preventDefault()
    clearInterval(timer)
    timerInProgress = false
})



startBtn.addEventListener('click', ()=>{
    event.preventDefault()
    if(timerInProgress)
        return

    
    hours = Number(inputs[0].value)
    minutes = Number(inputs[1].value)
    seconds = Number(inputs[2].value)

    if(minutes > 59 || minutes < 0){
        alert('Minutes should be between 0 to 59')
        return
    }
    else if(seconds > 59 || seconds < 0){
        alert('Seconds should be between 0 to 59')
        return
    }

    timerInProgress = true
    for(let i=0; i<inputs.length; i++){
        inputs[i].disabled = true
    }
    // timeDecrement()
    timer = setInterval(timeDecrement, 1000)
})

resetBtn.addEventListener('click', ()=>{
    location.reload()
    timerInProgress = false
})




let hours = 0
let minutes = 0
let seconds = 0

// function timeCalculation(hour, minute, second){
    


    function timeDecrement(){
        
        
        
        // time.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
        if(seconds > 0){
            secondDecrement()
        }
        else if(minutes > 0){
            minuteDecrement()
            seconds = 59
        }
        else if(hours > 0){
            hourDecrement()
            minutes = 59
            seconds = 59
        }
        else{
            clearInterval(timer)
            for(let i=0; i<inputs.length; i++){
                inputs[i].disabled = false
            }

            timerInProgress = false
            console.log(seconds)
        }
    
        console.log(hours,minutes,seconds)
        inputs[0].value = hours < 10  ? `0${hours}` : hours
        inputs[1].value = minutes < 10 ? `0${minutes}` : minutes
        inputs[2].value = seconds < 10 ? `0${seconds}` : seconds
        
        
        function secondDecrement(){
            seconds -= 1
        }
        
        function minuteDecrement(){
            minutes -= 1
        }
        
        function hourDecrement(){
            hours -= 1
        }


        
        
    }


// }
