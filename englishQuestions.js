const englishQuestions = [

    {
        question: "Choose the synonym of 'Abundant'.",
        options: ["Scarce", "Plentiful", "Weak", "Empty"],
        answer: 1
    },

    {
        question: "Choose the antonym of 'Ancient'.",
        options: ["Old", "Modern", "Historic", "Former"],
        answer: 1
    },

    {
        question: "Choose the correct spelling.",
        options: [
            "Accomodation",
            "Acommodation",
            "Accommodation",
            "Accommadation"
        ],
        answer: 2
    },

    {
        question: "He is good _____ Mathematics.",
        options: ["in", "at", "on", "with"],
        answer: 1
    },

    {
        question: "Choose the synonym of 'Benevolent'.",
        options: ["Cruel", "Kind", "Selfish", "Angry"],
        answer: 1
    },

    {
        question: "Choose the antonym of 'Expand'.",
        options: ["Increase", "Extend", "Contract", "Enlarge"],
        answer: 2
    },

    {
        question: "She _____ to school every day.",
        options: ["go", "going", "goes", "gone"],
        answer: 2
    },

    {
        question: "Choose the correct passive voice: 'Ali wrote a letter.'",
        options: [
            "A letter is written by Ali.",
            "A letter was written by Ali.",
            "A letter has written by Ali.",
            "A letter had written by Ali."
        ],
        answer: 1
    },

    {
        question: "What is the meaning of 'Break the ice'?",
        options: [
            "To break something",
            "To start a conversation",
            "To become angry",
            "To stop working"
        ],
        answer: 1
    },

    {
        question: "Choose the correct indirect speech: He said, 'I am tired.'",
        options: [
            "He said that I am tired.",
            "He said that he was tired.",
            "He says that he was tired.",
            "He said that he is tired."
        ],
        answer: 1
    }

];


// Variables
let currentQuestion = 0;
let score = 0;


// Load Question
function loadQuestion() {

    const q = englishQuestions[currentQuestion];

    document.getElementById("question").innerText =
        (currentQuestion + 1) + ". " + q.question;


    const options = document.querySelectorAll(".option");

    options.forEach(function(button, index) {

        button.innerText = q.options[index];

        button.disabled = false;

        button.style.display = "block";

        button.classList.remove("correct");
        button.classList.remove("wrong");

    });


    // Score
    document.getElementById("score").innerText =
        "Score: " + score;


    // Clear message
    document.getElementById("message").innerHTML = "";
}


// Check Answer
function checkAnswer(selected) {

    const q = englishQuestions[currentQuestion];

    const options = document.querySelectorAll(".option");


    // Disable all buttons
    options.forEach(function(button) {
        button.disabled = true;
    });


    // Correct Answer
    if (selected === q.answer) {

        score++;

        options[selected].classList.add("correct");

        document.getElementById("message").innerHTML =
            "<span style='color:green;font-weight:bold;'>✅ Correct Answer</span>";

    }

    // Wrong Answer
    else {

        options[selected].classList.add("wrong");

        options[q.answer].classList.add("correct");

        document.getElementById("message").innerHTML =
            "<span style='color:red;font-weight:bold;'>❌ Wrong Answer</span>";

    }


    document.getElementById("score").innerText =
        "Score: " + score;
}


// Next Question
function nextQuestion() {

    if (currentQuestion < englishQuestions.length - 1) {

        currentQuestion++;

        loadQuestion();

    }

    else {

        endTest();

    }

}


// End Test
function endTest() {

    document.getElementById("question").innerText =
        "🎉 English Test Completed!";


    document.querySelectorAll(".option").forEach(function(button) {
        button.style.display = "none";
    });


    document.getElementById("nextButton").style.display = "none";


    document.getElementById("score").innerText =
        "Final Score: " + score + " / " + englishQuestions.length;


    document.getElementById("message").innerHTML =
        "<strong>Well Done!</strong>";
}


// Start Test
loadQuestion();
