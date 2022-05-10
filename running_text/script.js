const textEl = document.getElementById("text")
const speedEl = document.getElementById("speed")

const text = "We love Progamming!!"

let idx=1;

const NUM = 500;

let time = NUM/speedEl.value 

function writeText(){
    textEl.innerHTML=text.slice(0,idx)
    idx++;

    if(idx>text.length){
        idx=1;
    }

    setTimeout(writeText,time)
}

writeText()

speedEl.addEventListener("input",(event)=>{
    time=NUM/event.target.value
})