const stopwatch = document.getElementById("display")

const playButton = document.getElementById("playButton")
const pauseButton = document.getElementById("pauseButton")
const resetButton = document.getElementById("resetButton")

let startTime;
let elapsedTime = 0;
let stopwatchInterval;


const timeToString = (time) => {
    let diffInHrs = time/3600000

    let hh = Math.floor(diffInHrs)

    let diffInMins = (diffInHrs-hh)*60
    let mm = Math.floor(diffInMins)

    let diffInSec = (diffInMins-mm)*60;
    let ss = Math.floor(diffInSec)

    let diffInMs = (diffInSec-ss) * 1000
    let ms = Math.floor(diffInMs)

    hh = hh.toString().padStart(2,"0")
    mm = mm.toString().padStart(2,"0")
    ss = ss.toString().padStart(2,"0")
    ms = ms.toString().padStart(3,"0")
    stopwatch.innerHTML = `${hh}:${mm}:${ss}:${ms}`
}

const showButton = (buttonKey) => {
    if(buttonKey==="PLAY"){
        playButton.style.display="block"
        pauseButton.style.display="none"
    }else{
        pauseButton.style.display="block"
        playButton.style.display="none"
    }
}
const startStopwatch = () => {

    startTime = Date.now()-elapsedTime

    stopwatchInterval = setInterval(()=>{
        elapsedTime = Date.now()-startTime

        timeToString(elapsedTime)
    },1)

    showButton("PAUSE")
}


const pauseStopwatch = () => {
    clearInterval(stopwatchInterval)
    showButton("PLAY")
}


const resetStopwatch = () => {
    clearInterval(stopwatchInterval)
    stopwatch.innerHTML = "00:00:00:000"
    elapsedTime=0;
    showButton("PLAY")
}


playButton.addEventListener("click",startStopwatch)
pauseButton.addEventListener("click",pauseStopwatch)
resetButton.addEventListener("click",resetStopwatch)