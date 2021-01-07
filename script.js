// Defining the questions
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: {
            1: "strings",
            2: "booleans",
            3: "alerts",
            4: "numbers"
        },
        correctAnswer: "3"
    },
    {
        question: "The condition in an if/else statement is enclosed within __________.",
        answers: {
            1: "quotes",
            2: "curly barckets",
            3: "parenthesis",
            4: "square brackets"
        },
        correctAnswer: "3"
    },
    {
        question: "Arrays in JavaScript can be used to store ___________.",
        answers: {
            1: "numbers and strings",
            2: "other arrays",
            3: "booleans",
            4: "all of the above"
        },
        correctAnswer: "4"
    },
    {
        question: "String values must be enclosed within ____________ when being assigned to variables.",
        answers: {
            1: "commas",
            2: "curly brackets",
            3: "quotes",
            4: "parenthesis"
        },
        correctAnswer: "3"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            1: "JavaScript",
            2: "terminal/bash",
            3: "for loops",
            4: "console.log"
        },
        correctAnswer: "4"
    }
]

// Calling the elements from the html
var mainHeader = document.getElementById("main-header");
var pageContent = document.getElementById("page-content");
var startButton = document.getElementById("start-button");
var timer = document.getElementById("seconds-remaining");

// Defining other elememts
var timeInterval;
var secondsLeft = 90;
var quizContent;
var message;



//Defining the functions and then calling them below:
// Function to start the quiz
function startQuiz() {

    var index = 0;

    quizContent = document.createElement("div");
    quizContent.setAttribute("id", "quiz-content");

    var quizQuestion = document.createElement("h2");
    quizQuestion.setAttribute("id", "quiz-questions");
    quizQuestion.textContent = questions[index].question;

    var quizAnswers = document.createElement("ul");
    quizAnswers.setAttribute("id", "quiz-answers");

    for (var i = 0; i < 4; i++) {
        var listEl = document.createElement("li");
        var buttonEl = document.createElement("button");
        buttonEl.setAttribute("class", "quiz-answer");
        buttonEl.setAttribute("data-id", i);
        buttonEl.textContent = questions[index].answers[i];

        listEl.appendChild(buttonEl);
        quizAnswers.appendChild(listEl);
    }

    quizContent.appendChild(quizQuestion);
    quizContent.appendChild(quizAnswers);
    mainHeader.replaceChild(quizContent, pageContent);

}

// Function to end the quiz and show the results 
function showResults() {

}

// Function to start the timer
function startTimer() {

}

// Function to stop the timer
function stopTimer()  {

}

// Adding event (function defined earlier) to the button
startButton.addEventListener("click", function() {
    startQuiz();
    startTimer();
});