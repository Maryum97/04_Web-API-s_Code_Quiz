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
var mainContent = document.getElementById("main-content");
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

    // Replace original page content with quiz questions and options

    var index = 0;

    quizContent = document.createElement("div");
    quizContent.setAttribute("id", "quiz-content");

    var quizQuestion = document.createElement("h3");
    quizQuestion.setAttribute("id", "quiz-questions");
    quizQuestion.textContent = questions[index].question;

    var quizAnswers = document.createElement("ul");
    quizAnswers.setAttribute("id", "quiz-answers");


    // Append options as buttons in "ul" element

    for (var i = 0; i < 4; i++) {
        var listEl = document.createElement("li");
        var buttonEl = document.createElement("button");
        buttonEl.setAttribute("class", "quiz-answer");
        buttonEl.setAttribute("background-color", "#6610f2"); // #####
        buttonEl.setAttribute("data-id", i);
        buttonEl.textContent = questions[index].answers[i];

        listEl.appendChild(buttonEl);
        quizAnswers.appendChild(listEl);
    }

    quizContent.appendChild(quizQuestion);
    quizContent.appendChild(quizAnswers);
    mainContent.replaceChild(quizContent, pageContent);


    // Add event to options (as buttons)

    var optionBtn = quizAnswers.querySelectorAll("button");

    quizAnswers.addEventListener("click", function(event) {
        var element = event.target;
        if (element.matches("button")) {
            var buttonID = element.getAttribute("data-id");
            checkAnswer(index, buttonID);
            index++;
        }
        if (index === questions.length) {
            stopTimer();
            showResults();
            return null;
        }

    quizQuestion.textContent = questions[index].question;
    for (var j = 0; j < 4; j++) {
        optionBtn[j].textContent = questions[index].answers[j];
    }

    })

}

// Function to alert message on page for correct/incorrect answer
function checkAnswer() {
    var correctOption = (questions[index].answers[buttonID] === questions[index].correctAnswer);

    var message = document.createElement("div");
    var pEl = document.createElement("p");
    message.setAttribute("class", "message");

    message.appendChild(pEl);
    mainContent.appendChild(message);

    if (correctOption) {
        pEl.textContent = "Correct Answer!";
    }

    else {
        pEl.textContent = "Incorrect Answer!";
    }
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