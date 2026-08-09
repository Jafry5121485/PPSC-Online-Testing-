let currentQuestion = 0;
let score = 0;

function loadQuestion() {

    const q = englishQuestions[currentQuestion];

    // Question
    document.getElementById("question").innerText =
        (currentQuestion + 1) + ". " + q.question;

    // Options
    const options = document.querySelectorAll(".option");

    options.forEach((btn, index) => {
        btn.innerText = q.options[index];
        btn.disabled = false;

        // Remove old classes
        btn.classList.remove("correct");
        btn.classList.remove("wrong");
    });

    // Score
    document.getElementById("score").innerText =
        "Score: " + score;

    // Question number اگر HTML میں موجود ہے
    const questionNumber = document.getElementById("questionNumber");

    if (questionNumber) {
        questionNumber.innerText =
            "Question " + (currentQuestion + 1) +
            " / " + englishQuestions.length;
    }

    // Message clear
    const message = document.getElementById("message");

    if (message) {
        message.innerHTML = "";
    }
}


function checkAnswer(selected) {

    const q = englishQuestions[currentQuestion];

    const options = document.querySelectorAll(".option");

    // Disable all options
    options.forEach(btn => {
        btn.disabled = true;
    });

    const message = document.getElementById("message");

    // Check answer
    if (selected === q.answer) {

        score++;

        options[selected].classList.add("correct");

        if (message) {
            message.innerHTML =
                "<span style='color:green;font-weight:bold;'>✅ Correct Answer</span>";
        }

    } else {

        options[selected].classList.add("wrong");

        // Correct option show کریں
        options[q.answer].classList.add("correct");

        if (message) {
            message.innerHTML =
                "<span style='color:red;font-weight:bold;'>❌ Wrong Answer</span>";
        }
    }

    document.getElementById("score").innerText =
        "Score: " + score;
}


// Next Question
function nextQuestion() {

    if (currentQuestion < englishQuestions.length - 1) {

        currentQuestion++;

        loadQuestion();

    } else {

        endTest();
    }
}


// Test End
function endTest() {

    document.getElementById("question").innerText =
        "Test Completed! 🎉";

    document.querySelectorAll(".option").forEach(btn => {
        btn.style.display = "none";
    });

    const nextBtn = document.getElementById("nextButton");

    if (nextBtn) {
        nextBtn.style.display = "none";
    }

    document.getElementById("score").innerText =
        "Final Score: " + score + " / " + englishQuestions.length;
}


// Start Test
loadQuestion();
