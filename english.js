const questions = [
  {
    question: "Choose the correct synonym of 'Abundant'.",
    options: ["A) Scarce", "B) Plenty", "C) Empty", "D) Weak"],
    answer: 1
  },
  {
    question: "Choose the correct antonym of 'Brave'.",
    options: ["A) Coward", "B) Strong", "C) Hero", "D) Bold"],
    answer: 0
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function loadQuestion() {
  answered = false;

  document.getElementById("question").innerText =
    questions[currentQuestion].question;

  const buttons = document.querySelectorAll(".option");

  for (let i = 0; i < 4; i++) {
    buttons[i].innerText = questions[currentQuestion].options[i];
    buttons[i].disabled = false;
  }

  document.getElementById("score").innerText = "Score: " + score;
}

function checkAnswer(selected) {
  if (answered) return;

  answered = true;

  if (selected === questions[currentQuestion].answer) {
    score++;
  }

  document.getElementById("score").innerText = "Score: " + score;

  const buttons = document.querySelectorAll(".option");
  buttons.forEach(btn => btn.disabled = true);
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document.querySelector(".subject-card").innerHTML =
      "<h2>Test Completed!</h2>" +
      "<h3>Your Score: " + score + " / " + questions.length + "</h3>";
  }
}

window.onload = loadQuestion;
