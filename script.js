// List all variables

var wrapper = document.querySelector("#wrapper");
var quizTimer = document.querySelector("#quizTimer");
var questionList = document.querySelector("#questionList");
var beginTime = document.querySelector("#beginTime"); // start quiz button
var score = 0;
var questionIndex = 0;
var timeLeft = 80;
var penalty = 10;
var createChoices = document.createElement("cc");
var timePending = 0;

//// Array for questions
var quizQuestions = [
    {
        title: "Commonly used data types DO NOT include:",
        options: ["alerts", "numbers", "strings", "booleans"],
        answer: "alerts"
    },

    {
        title: "Arrays in JavaScript can be used to store __________________.",
        options: ["numbers and strings", "booleans", "other arrays", "all of the above"],
        answer: "all of the above"
    },

    {
        title: "String values must be enclosed within ___________ when being assigned to variables",
        options: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },

    {
        title: "The condition in an if / else statement is enclosed within _________________.",
        options: ["quotes", "curly brackets", "square brackets", "parentheses"],
        answer: "parentheses"
    },

    {
        title: "A very useful tool used for developing and debugging for printing content to the debugger is:",
        options: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
    },

];

//move bottom variables to top**************
var timePending = 0;
var time = document.getElementById("timer");

//Timer ----Reverse timer starts on the click of start quiz
timer.addEventListener("click", function() {
    if (timePending === 0) {
        timePending = setInterval(function () {
            timeLeft--;
            quizTimer.textContent = "Time Remainging: " + timePending;

        if (timePending <= 0) {
            clearPending(timePending);
            allDone();
            quizTimer.textContent = "Your Time's Up.";
        }
        },
        )
    }

    show(questionIndex);
}
);



// Show quiz questions 
function show(questionIndex) {
    questionList.innerHTML = "";
    createChoices.innerHTML = "";

    //need to add a for loop because we are looping through all questions and choices that were listed above in array
    for (var i = 0; i < quizQuestions.length; i++) {

        var theQuestion = quizQuestions[questionIndex].title;
        var theOptions = quizQuestions[questionIndex].options;

        questionList.textContent = theQuestion;
    }

    theOptions.forEach(function (newEl) {
        var listOption = document.createElement("li");
        listOption.textContent = newEl;
        //new list of answer options for each question
        questionList.appendChild(createChoices);
        createChoices.appendChild(listOption);
        listOption.addEventListener("click", (compare));
    })
}


// Reset/clear values
function resetVariables () {
    startScore = 0;
    questionIndex = 0;
}




// Check for correct answer






//Link to scores.js to show high scores



// End of Quiz






////// add Event listeners at bottom

submitButton.addEventListener("click", function() {
    beginQuiz()
    console.log("start")
})

