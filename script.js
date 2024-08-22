const questions = [
    {
        question: "Quem é o deus do trovão na mitologia grega?",
        answers: ["Zeus", "Poseidon"],
        correct: 1
    },
    {
        question: "Quem é a deusa da sabedoria e da estratégia?",
        answers: ["Atena", "Afrodite"],
        correct: 1
    },
    {
        question: "Qual deus é conhecido como o mensageiro dos deuses?",
        answers: ["Hermes", "Ares"],
        correct: 1
    },
    {
        question: "Quem é o deus do mar?",
        answers: ["Poseidon", "Apolo"],
        correct: 1
    },
    {
        question: "Qual deusa é associada ao amor e à beleza?",
        answers: ["Afrodite", "Deméter"],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const answer1Button = document.getElementById('answer1');
    const answer2Button = document.getElementById('answer2');

    const currentQuestion = questions[currentQuestionIndex];
    
    questionElement.textContent = currentQuestion.question;
    answer1Button.textContent = currentQuestion.answers[0];
    answer2Button.textContent = currentQuestion.answers[1];
}

function checkAnswer(answer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (answer === currentQuestion.correct) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Você acertou ${score} de ${questions.length} perguntas!`;
}

window.onload = loadQuestion;
