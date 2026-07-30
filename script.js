let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("question").innerHTML = englishQuestions[currentQuestion].question;

    let options = document.getElementsByClassName("option");

    for (let i = 0; i < 4; i++) {
        options[i].innerHTML = englishQuestions[currentQuestion].options[i];
    }

    document.getElementById("score").innerHTML = "Score: " + score;
}

function checkAnswer(option) {
    if (option == englishQuestions[currentQuestion].answer) {
        score++;
    }
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion >= englishQuestions.length) {
        document.getElementById("question").innerHTML =
            "Test Completed! Final Score: " + score + "/" + englishQuestions.length;
        return;
    }

    loadQuestion();
}

window.onload = loadQuestion;
