var startButton = document.querySelector("#startQuiz")
var timer = document.querySelector("#timer")
var questionsContainer = document.querySelector("#questionsContainer")
var questionText = document.querySelector("#question")
var answers = document.querySelector("#answers")

var questionsArray = [
    { 
        question: "Arrays in javascript can be used to store:", 
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correctAnswer: "all of the above",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: [ "javascript", "terminal bash", "for loops", "console.log"],
        correctAnswer: "console.log",
    },
    {
        question: "Commonly used data types do not include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        correctAnswer: "alerts",
    },
    {
        question: "String values must be enclosed within __ when being assigned to variables:",
        choices: ["
        "]
    }

]

var timeLeft = 3


function countdown() {
    timeLeft --;
    timer.textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(timerId);
        // initiate game over function
    } 
};

function startQuiz() {
    timerId = setInterval(countdown, 1000);
    displayQuestion();
};

startButton.addEventListener("click", startQuiz)

var questionIndex = 0

function displayQuestion() {
    var currentQuestion = questionsArray[questionIndex]
    questionText.textContent = currentQuestion.question

    var currentAnswers = currentQuestion.choices
    for (var i = 0; i < currentAnswers.length; i++) {
        var answerText = document.createElement("div")  
        answerText.textContent = currentAnswers[i];
        answerText.setAttribute("class", "answer-button");
        answers.appendChild(answerText)
    }
    // add event listener to class "answer-button", listener would call check answer function

}


// make array of questions (each question should be an object)
    // nested array of possible choices with property for correct answer

// write functionality for working timer and display on page

// write functionality to loop through questions and click listeners on answer

// write function to check if answer is correct, if correct, increase score and move to next question

// write function to check if answer is not correct, if not correct, subtract time from timer and move to nexd question

// write game over function, to display final score, ask to enter name and save as high score

// link to page to view high score
