const time = document.querySelector("#time")
const stopBtn = document.querySelector("#stop")
const startBtn = document.querySelector("#start")
const resetBtn = document.querySelector("#reset")
const inputs = document.querySelectorAll('input')
let timer = null
let timerInProgress = false



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
    
    timer = setInterval(timeDecrement, 1000)
})

resetBtn.addEventListener('click', ()=>{
    location.reload()
    timerInProgress = false
})




let hours;
let minutes;
let seconds;




function timeDecrement(){
        
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
        }
    
        
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


