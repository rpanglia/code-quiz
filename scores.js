// List variables

var scoresList = document.querySelector("#scoresList");
var clear = document.querySelector("#clear");
var backButton = document.querySelector("#backButton");


// Add event listeners to end and reset containers
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});


// Get localStorage values for the scores (properties in script.js)
var everyScore = localStorage.getItem("everyScore");
everyScore = JSON.parse(everyScore);

if (everyScore !== null) {

    for (var i = 0; i < everyScore.length; i++) {
        var makeLi = document.createElement("li");
        makeLi.textContent = everyScore[i].initials + "  -  " + everyScore[i].score;
        scoresList.appendChild(makeLi);
    }
}



backButton.addEventListener("click", function() {
    window.location.replace("./index.html");  
    //window.location.replace replaces the current history item so you can't go back to it.
}
);
