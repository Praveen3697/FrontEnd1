const RANDOM_QUOTE_API_URL ='https://api.quotable.io/random' 
const displayQuoteElement = document.getElementById("quoteDisplay")
const displayInputElement = document.getElementById("quoteInput")
const timerElement = document.getElementById("timer")


displayInputElement.addEventListener('input',()=>{

    const arrayQuote = displayQuoteElement.querySelectorAll('span');
    const arrayValue = displayInputElement.value.split('')

    let correct = true
    arrayQuote.forEach((characterSpan,index) => {
        const character = arrayValue[index]

        if(character == null)
        {
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
            correct = false;
        }
        else if(character === characterSpan.innerText){
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
        }
        else{
            characterSpan.classList.remove('correct')
            characterSpan.classList.add('incorrect')
            correct = false
        }
    })
    
    if(correct) getNextQuote()

})

function getRandomQuote(){
   
   return fetch(RANDOM_QUOTE_API_URL)
    .then(response => response.json())
    .then(data => data.content)
}

async function getNextQuote(){
    const quote = await getRandomQuote()
    displayQuoteElement.innerHTML = '';
    quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        displayQuoteElement.appendChild(characterSpan);
    })

    displayInputElement.value = null;
    startTimer()
}

let startTime;
function startTimer(){

    timerElement.innerText = 0 
    startTime = new Date()
    setInterval(() => {
        timerElement.innerText = getTimerTime()
    },1000)
}

function getTimerTime(){
    return Math.floor((new Date() - startTime)/1000)
}

getNextQuote()

 