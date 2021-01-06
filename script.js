// Define the questions
var quizQuestions = [
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


var mainHeader = document.getElementById("main-header");
var pageMessage = document.getElementById("page-message");
var startButton = document.getElementById("start-button");

startQuiz();
showResults();

startButton.addEventListener("click", function() {
    var 
})