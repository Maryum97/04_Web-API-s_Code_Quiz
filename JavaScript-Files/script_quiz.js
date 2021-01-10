// Defining the questions
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: ["strings", "booleans", "alerts", "numbers"],
        correctAnswer: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within __________.",
        answers: ["quotes", "curly barckets", "parenthesis", "square brackets"],
        correctAnswer: "parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store ___________.",
        answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correctAnswer: "all of the above"
    },
    {
        question: "String values must be enclosed within ____________ when being assigned to variables.",
        answers: ["commas", "curly brackets", "quotes", "parenthesis"],
        correctAnswer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        correctAnswer: "console.log"
    }
]

// Calling the elements from index.html
var mainContent = document.getElementById("main-content");
var pageContent = document.getElementById("page-content");
var timer = document.getElementById("seconds-remaining");

// Defining other elememts
var timeInterval;
var secondsLeft = 90;
var quizContent;
var message;
var removeMessage;
var results;


//Defining the functions and then calling them below:
// Function to start the quiz
function startQuiz() {

    // Replace original page content with quiz questions and options

    var index = 0;

    quizContent = document.createElement("div");
    quizContent.setAttribute("id", "page-content");

    var quizQuestion = document.createElement("h3");
    quizQuestion.setAttribute("id", "quiz-questions");
    quizQuestion.textContent = questions[index].question;

    var quizAnswers = document.createElement("ul");
    quizAnswers.setAttribute("id", "quiz-answers");


    // Append options as buttons in "ul" element

    for (var i = 0; i < 4; i++) {
        var listEl = document.createElement("li");
        var buttonEl = document.createElement("button");

         // Dynamically apply css styling to option buttons
        buttonEl.style.color = "white";
        buttonEl.style.backgroundColor = "#6610f2";

        // Set attributes to the button
        buttonEl.setAttribute("class", "quiz-answer");
        buttonEl.setAttribute("data-id", i);
        buttonEl.textContent = questions[index].answers[i];

        // Append to parent
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

        // When the quiz has reached the end
        if (index === questions.length) {
            stopTimer();
            showResults();
            return null;
        }


    // Next question
    quizQuestion.textContent = questions[index].question;
    for (var j = 0; j < 4; j++) {
        optionBtn[j].textContent = questions[index].answers[j];
    }

    })

}

// Function to alert message on page for correct/incorrect answer
function checkAnswer(index, buttonID) {
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
        if (secondsLeft <= 10) {
            secondsLeft = 0;
        }
        else {
            secondsLeft -= 10;
        }
    }

    removeMessage = setTimeout(function() {
        mainContent.removeChild(message);
    }, 5000)
}

// Function to start the timer
function startTimer() {
    timer.textContent = secondsLeft;

    timeInterval = setInterval(function(){
        if (secondsLeft <= 0) {
            stopTimer();
            showResults();
            return null;
        } 

        secondsLeft--;
        timer.textContent = secondsLeft;
        
    }, 1000)
}


// Function to stop the timer
function stopTimer()  {
    timer.textContent = secondsLeft;
    clearInterval(timeInterval);
}

// Function to end the quiz and show the results 
function showResults() {

    // Replace original page content with results in place of quiz questions

    // Create, style and append new elements to final page in the parent id
    results = document.createElement("div");
    results.setAttribute("class", "results");

    var hEl = document.createElement("h1");
    hEl.textContent = "Quiz Complete!";
    hEl.style.textAlign = "center"; // dynamically applying css styling

    var pEl = document.createElement("p");
    pEl.textContent = "Your final score is " + secondsLeft + ".";

    var form = document.createElement("form");
    form.setAttribute("class", "form-quiz-answers");
    var label = document.createElement("label");
    label.textContent = "Enter initials: ";
    var input = document.createElement("input");
    input.setAttribute("type", "text-input");
    var submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "submit");

    // Append elements into "form"
    label.appendChild(input);
    form.appendChild(label);
    form.appendChild(submit);
    form.style.textAlign = "center";


    // Appnend all new elements, including "form", into "results"
    results.appendChild(hEl);
    results.appendChild(pEl);
    results.appendChild(form);
    var currentPageContent = document.getElementById("page-content");
    mainContent.replaceChild(results, currentPageContent);

    // Function to enter input value & save score in  local storage
    submit.addEventListener("click", function(event) {

        event.preventDefault();
        
        // Call function from script_highscores.js to set scores into local storage (saving scores)
        setScore(input.value, secondsLeft);

        // Redirect to highscores page
        window.location.assign("highscores.html");
    })

}

// Adding event (function defined earlier) to the button
document.getElementById("start-button").addEventListener("click", function() {
    startQuiz();
    startTimer();
});


