// Call appropriate elements from the 

var scoresList = document.getElementById("highscore-list");

var highscoreArray = {
    initials: [],
    score: []
}

// Call functions to store scores in local storage, render in highscores list, save in list and remove from list


// Store scores in local storage
function storeScores() {

    var storeHighscore = localStorage.getItem("highscoreArray");

    if (storeHighscore !== null) {
        highscoreInStorage = JSON.parse(storeHighscore);
        highscoreArray.initials = storeHighscore.initials;
        highscoreArray.score = storeHighscore.score;
    }

    else {
        highscoreArray.initials = [];
        highscoreArray.score = [];
    }

}


// Save score in the highscores and into the local storage
function saveScore(newInitials, newScore) {
    storeScores();

    highscoreArray.initials.push(newInitials);
    highscoreArray.score.push(newScore);

    var highscoreString = JSON.stringify(highscoreArray);
    localStorage.setItem("highscoreArray", highscoreString);

}


// Render score in highscore list
function renderScores() {

    scoresList.innerHTML = "";

    storeScores();

    for (var i = 0; i < highscoreArray.initials.length; i++) {
        var liEl = document.createElement("li");
        liEl.setAttribute("class", "indiv-highscore");
        liEl.textContent = highscoreArray.initials[i] + " - " + highscoreArray.score[i];
    }
}


// Remove scores from list
function clearScores() {
    localStorage.removeItem("highscores");
    renderScores();
}

if (scoresList !== null) {
    renderScores();
}