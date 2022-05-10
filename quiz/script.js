const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")

const submitBtn = document.getElementById("submit")

const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")

let currentQuestionIndex = 0;

function deselectAnswer(){
    answerEls.forEach(answerEl=>answerEl.checked=false)
}

function loadQuestion(){
    deselectAnswer()

    const currentQuesData = quizData[currentQuestionIndex]

    questionEl.innerText = currentQuesData.question

    a_text.innerText = currentQuesData.a
    b_text.innerText = currentQuesData.b
    c_text.innerText = currentQuesData.c
    d_text.innerText = currentQuesData.d

}

loadQuestion()

let score = 0;

function selectAns(){
    let answer;

    answerEls.forEach(answerEl=>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer;
}

submitBtn.addEventListener("click",()=>{

    const answer = selectAns()

    if(answer){
        if(answer===quizData[currentQuestionIndex].correct){
            score++;
        }
        currentQuestionIndex++;
        if(currentQuestionIndex<quizData.length){
            loadQuestion()
        }
        else{
            quiz.innerHTML=`
            <h2>
            You answered ${score}/${quizData.length} questions correctly
            </h2>

            <button onclick="location.reload()">Reload</button>
            `
        }
    } else{
        alert("Please select an option")
    }
})