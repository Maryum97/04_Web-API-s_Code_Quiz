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


// Render score in highscore list
function renderScores() {

    scoresList.innerHTML = "";

    storeScores();

    for (var i = 0; i < scoresList.highscoreArray.initials.length; i++) {
        var liEl = document.createElement("li");
        liEl.setAttribute("class", "indiv-highscore");
        liEl.textContent = highscoreArray.initials[i] + " - " + highscoreArray.score[i];
    }
}