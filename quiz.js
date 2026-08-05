let currentQuestion = 0;
let score = 0;
let selectedAnswer = -1;
let timeLeft = 20 * 60;
let timer;

const optionButtons = document.querySelectorAll(".option");

function loadQuestion() {

    const q = quizQuestions[currentQuestion];

    document.getElementById("current-question").innerText = currentQuestion + 1;
    document.getElementById("total-questions").innerText = quizQuestions.length;
    document.getElementById("question").innerText = q.question;

    optionButtons.forEach((btn, index) => {
        btn.innerText = q.options[index];
        btn.disabled = false;
        btn.classList.remove("correct", "wrong");
    });

    selectedAnswer = -1;
}
function checkAnswer(index) {

    selectedAnswer = index;

    optionButtons.forEach(btn => {
        btn.disabled = true;
    });

    if (index === quizQuestions[currentQuestion].answer) {
        optionButtons[index].classList.add("correct");
        score++;
    } else {
        optionButtons[index].classList.add("wrong");
        optionButtons[quizQuestions[currentQuestion].answer].classList.add("correct");
    }

    document.getElementById("score").innerText = score;

    setTimeout(nextQuestion, 1000);
}

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {

        loadQuestion();

    } else {

        clearInterval(timer);

        localStorage.setItem("score", score);
        localStorage.setItem("total", quizQuestions.length);

        window.location.href = "result.html";
    }
               }
function startTimer() {

    timer = setInterval(function () {

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        document.getElementById("timer").innerText =
            minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

        timeLeft--;

        if (timeLeft < 0) {

            clearInterval(timer);

            localStorage.setItem("score", score);
            localStorage.setItem("total", quizQuestions.length);

            window.location.href = "result.html";
        }

    }, 1000);
}

window.onload = function () {

    document.getElementById("score").innerText = score;

    loadQuestion();

    startTimer();
};
