// script is IMPORTANT as a beggener! 
const questions = [
    {
        question: "What is the largest animal in the world?",
        answer: [
            { text: "shark", correct: false },
            { text: "blue whale", correct: true },
            { text: "elephant", correct: false },
            { text: "giraffe", correct: false },
        ]
    },
    {
        question: "What is the largest country in the world?",
        answer: [
            { text: "IND", correct: false },
            { text: "US", correct: false },
            { text: "UK", correct: false },
            { text: "RASHIA", correct: true },
        ]
    },
    {
        question: "What is the largest mountain in the world?",
        answer: [
            { text: "maunt everst", correct: true },
            { text: "himalay", correct: false },
            { text: "rmejjaye", correct: false },
            { text: "ddf", correct: false },
        ]
    },
    {
        question: "Who is the PM of india?",
        answer: [
            { text: "Modi", correct: true },
            { text: "gadakri", correct: false },
            { text: "shah", correct: false },
            { text: "yogi", correct: false },
        ]
    },
    {
        question: "what is your name?",
        answer: [
            { text: "amol", correct: false },
            { text: "vishal", correct: true },
            { text: "akash", correct: false },
            { text: "ashish", correct: false },
        ]
    },
]

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
score = 0;

function startQuize(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}
function showQuestion(){
    resetState();
    let curretQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + curretQuestion.question;

    curretQuestion.answer.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}   

function resetState(){
    nextButton.style.display = 'none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = 'Start Again';
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex ++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }else{
        startQuize();
    }
})

startQuize();