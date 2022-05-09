const display = document.getElementById("display")

function clearExp(){
    display.innerText=""
}

function back(){
    display.innerText=display.innerText.slice(0,-1)
}

function evalExp(){
    try{
        const lastChar = display.innerText[display.innerText.length-1]
        if(isOperator(lastChar)){
            alert("Cannot evaluate an expression ending with an operator")
        }
        else{
            display.innerText=eval(display.innerText)
        }
    }
    catch(err){
        display.innerText="Error"
    }
}

function isOperator(op){
    if(op === "+" || op === "-" || op === "*" || op === "/"){
        return true;
    }
    return false;
}

function isMulOrDiv(op){
    if(op ==="*" || op ==="/"){
        return true;
    }
    return false;
}

function appendChar(char){
    if(display.innerText==="")
    {
        if(char!='0' && !isMulOrDiv(char)){
            display.innerText=display.innerText+char
        }
    }
    else{
        const prevChar = display.innerText[display.innerText.length - 1]
        if(isOperator(char) && isOperator(prevChar)){
            display.innerText = display.innerText.slice(0,-1)
        }
        display.innerText = display.innerText+char
    }
}