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


function checkAnswer(selected) {

  // Dobara click hone se bachaye
  document.querySelectorAll(".option").forEach(btn => {
    btn.disabled = true;
  });

  // Correct answer
  if (selected === currentQuestion.answer) {
    score++;
    document.getElementById("score").innerText = score;

    document.getElementById("message").innerHTML =
      "<span style='color:green;font-weight:bold;'>✅ Correct Answer</span>";
  } else {
    document.getElementById("message").innerHTML =
      "<span style='color:red;font-weight:bold;'>❌ Wrong Answer</span>";
  }

  // 1 second baad next question
  setTimeout(() => {

    document.getElementById("message").innerHTML = "";

    currentIndex++;

    if (currentIndex < questions.length) {
      loadQuestion();
    } else {
      endTest();
    }

  }, 1000);
}
