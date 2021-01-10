// Calling the element from highscores.html
var scoreList = document.getElementById("highscore-list");
var clearBtn = document.getElementById("clear-button");

var highscores = {
    initials : [],
    scores : [],
}


// Call function to get scores from local storage
function getScores() {
    var storedHighscoresString = localStorage.getItem("highscores");

    if (storedHighscoresString !== null) {
        var storedHighscores = JSON.parse(storedHighscoresString);
        highscores.initials = storedHighscores.initials;
        highscores.scores = storedHighscores.scores;
    }
    else {
        highscores.initials = [];
        highscores.scores = [];
    }
}

// Call funtion to render scores into the highscores list
function renderScores() {
    scoreList.innerHTML = "";
    
    getScores();

    for (var i = 0; i < highscores.initials.length; i++) {
        var listEl = document.createElement("li");
        var pEl = document.createElement("p");
        pEl.setAttribute("class", "highscore");
        pEl.textContent = highscores.initials[i] + " - " + highscores.scores[i];
        
        listEl.appendChild(pEl);
        scoreList.appendChild(listEl);
    }
}

// Call function to set scores into local storage
function setScore(newInitials, newScore) {
    getScores();
    
    highscores.initials.push(newInitials);
    highscores.scores.push(newScore);

    var highscoresString = JSON.stringify(highscores);
    localStorage.setItem("highscores", highscoresString);
}

// Call function to clear scores from storage
function clearScores() {
    localStorage.removeItem("highscores");
    renderScores();
}

if (scoreList !== null) {
    renderScores();
}

// Please look at the "clearBtn.js" file to see the rest of the remaining code; it was created to prevent errors in the console
// The "clear high scores" button does not exist in index.html, so because this file is linked to the index page, the error in the console shows up, stating that there is no clearbtn in the index page
// Therefoere, the code for the clearBtn has been moved to a separate file.