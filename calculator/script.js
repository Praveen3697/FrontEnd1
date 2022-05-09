const display = document.getElementById("display")

const buttons = document.querySelectorAll(".btn")

function buttonClick(btn){
    btn.addEventListener("click",()=>{
        switch(btn.innerText){
            case 'C':
                display.innerText=""
                break;
            case '←':
                display.innerText=display.innerText.slice(0,-1)
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                    break;
                }
                catch{
                    display.innerText="Error"
                }
            default:
                display.innerText = display.innerText+btn.innerText
        }
    })
}

buttons.forEach(btn=>{
    buttonClick(btn)
})