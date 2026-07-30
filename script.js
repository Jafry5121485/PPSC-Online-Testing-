let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option");
const scoreElement = document.getElementById("score");

function loadQuestion() {
    let q = englishQuestions[currentQuestion];

    questionElement.innerText = q.question;

    optionButtons.forEach((btn, index) => {
        btn.innerText = q.options[index];
        btn.onclick = function () {
            if (index === q.answer) {
                score++;
            }

            scoreElement.innerText = score;

            currentQuestion++;

            if (currentQuestion < englishQuestions.length) {
                loadQuestion();
            } else {
                questionElement.innerText =
                    "Test Completed! Your Score: " + score + "/" + englishQuestions.length;

                optionButtons.forEach(btn => btn.style.display = "none");
            }
        };
    });
}
loadQuestion();
