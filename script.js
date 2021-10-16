// List all variables

var wrapper = document.querySelector("#wrapper");
var quizTimer = document.querySelector("#quizTimer");
var questionList = document.querySelector("#questionList");
var timer = document.querySelector("#beginTime"); // start quiz button

var score = 0;
var questionIndex = 0;
var timeLeft = 80;
var timePending = 0;
var penalty = 10;
var createChoices = document.createElement("cc"); //creating new elements



//// Array for questions
var quizQuestions = [
    {
        title: "Commonly used data types DO NOT include:",
        options: ["Alerts", "Numbers", "Strings", "Booleans"],
        answer: "Alerts"
    },

    {
        title: "Arrays in JavaScript can be used to store __________________.",
        options: ["Numbers and Strings", "Booleans", "Other Arrays", "All of the above"],
        answer: "All of the above"
    },

    {
        title: "String values must be enclosed within ___________ when being assigned to variables",
        options: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
        answer: "Quotes"
    },

    {
        title: "The condition in an if / else statement is enclosed within _________________.",
        options: ["Quotes", "Curly Brackets", "Square Brackets", "Parentheses"],
        answer: "Parentheses"
    },

    {
        title: "A very useful tool used for developing and debugging for printing content to the debugger is:",
        options: ["JavaScript", "Terminal / Bash", "for Loops", "console log"],
        answer: "console log"
    },

];



//Timer ----Reverse timer starts on the click of start quiz
timer.addEventListener("click", function() {
    if (timePending === 0) {
        timePending = setInterval(function () {
            timeLeft--;
            quizTimer.textContent = "Time Remaining: " + timeLeft;

            if (timeLeft <= 0) {
                //is clearPending supposed to be clearInterval to clear everything out??
                clearInterval(timePending);
                allDone();
                quizTimer.textContent = "Your Time's Up.";
            }
        }, 1000);
    }
    show(questionIndex);
}); 



// Show quiz questions 
function show(questionIndex) {
    questionList.innerHTML = "";
    createChoices.innerHTML = "";

    //need to add a for loop because we are looping through all questions and choices that were listed above in array
    for (var i = 0; i < quizQuestions.length; i++) {
        var currentQuestion = quizQuestions[questionIndex].title;
        var currentOptions = quizQuestions[questionIndex].options;
        questionList.textContent = currentQuestion;
    }

    currentOptions.forEach(function (newOption) {
        var listOption = document.createElement("li");
        listOption.textContent = newOption;
        //new list of answer options for each question
        questionList.appendChild(createChoices);
        createChoices.appendChild(listOption);
        listOption.addEventListener("click", (check));
    })
}


// Check for correct answer and pending questions
function check(event) {

    var item = event.target;
    if (item.matches("li")) {

        var makeDiv = document.createElement("div");
        makeDiv.setAttribute("id", "makeDiv");

        // if user's answer is correct..
        if (item.textContent == quizQuestions[questionIndex].answer) {
            score++;
            makeDiv.textContent = "That's Correct!";
        }

        // if user's answer is INCORRECT, take off 10 seconds for each wrong answer AND provide the correct answer
        else {
            timeLeft = timeLeft - penalty;
            makeDiv.textContent = "That's Incorrect. The correct answer was: " + quizQuestions[questionIndex].answer;  
        }
    }

    // how to know # of questions remaining in quiz 
    questionIndex++;

    if (questionIndex >= quizQuestions.length) {
        allDone();
        makeDiv.textContent = "Your answered " + score + " out of " + quizQuestions.length + " questions correctly.";
    } 
    
    else {
        show(questionIndex);
    }

    questionList.appendChild(makeDiv);
}




//if user comes to end of quiz and no questions remain, start allDone func

function allDone() {

    questionList.innerHTML = "";
    quizTimer.innerHTML = "";

    // Concluding line
    var endLine = document.createElement("line");
    endLine.setAttribute("id", "endLine");
    endLine.textContent = "You've reached the end of this quiz!";
    questionList.appendChild(endLine);

    var makePBlock = document.createElement("p");
    makePBlock.setAttribute("id", "makePBlock");
    questionList.appendChild(makePBlock);

    // Determine time pending and present final score
    if (timeLeft >= 0) {
        var secondsLeft = timeLeft;
        var makePBlock = document.createElement("p");
        clearInterval(timePending);
        makePBlock.textContent = "Your final score is: " + secondsLeft;
        questionList.appendChild(makePBlock);
    }


    var makeInputLabel = document.createElement("label");
    makeInputLabel.setAttribute("id", "makeInputLabel");
    makeInputLabel.textContent = "Please enter your initials here: ";
    questionList.appendChild(makeInputLabel);


    // user inputs initials at end of quiz and hit submit
    var makeInput = document.createElement("input");
    makeInput.setAttribute("type", "text");
    makeInput.setAttribute("id", "initials");
    makeInput.textContent = "";
    questionList.appendChild(makeInput);

    //typing submit response to the question div
    var makeSubmit = document.createElement("button");
    makeSubmit.setAttribute("type", "submit");
    makeSubmit.setAttribute("id", "Submit");
    makeSubmit.textContent = "Submit";
    questionList.appendChild(makeSubmit);
    


    makeSubmit.addEventListener("click", function () {
        var initials = makeInput.value;
    
        if (initials === null) {
            console.log("Invalid Entry");
        }
        else {
            var finalScore = {
                initials: initials,
                score: secondsLeft
            }
            console.log(finalScore);
            var everyScore = localStorage.getItem("everyScore");
            if (everyScore === null) {
                everyScore = [];
            } else {
                everyScore = JSON.parse(everyScore);
            }
            everyScore.push(finalScore);
            var theScore = JSON.stringify(everyScore);
            localStorage.setItem("everyScore", theScore);
    
            // take user to end page
            window.location.replace("./scores.html");
        }
    });

}


// End of Code Quiz