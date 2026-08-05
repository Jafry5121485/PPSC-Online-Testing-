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
