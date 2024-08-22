// Perguntas e respostas corretas
const quizData = [
    {
        question: "Qual é o nome do deus do trovão na mitologia grega?",
        image: "https://via.placeholder.com/300?text=Deus+do+Trovão",
        correctAnswer: "Zeus"
    },
    {
        question: "Quem é a deusa da sabedoria na mitologia grega?",
        image: "https://via.placeholder.com/300?text=Deusa+da+Sabedoria",
        correctAnswer: "Atena"
    },
    {
        question: "Qual deus é conhecido como o deus dos mares?",
        image: "https://via.placeholder.com/300?text=Deus+dos+Mares",
        correctAnswer: "Poseidon"
    },
    {
        question: "Quem é o deus do vinho e da festividade?",
        image: "https://via.placeholder.com/300?text=Deus+do+Vinho",
        correctAnswer: "Dionísio"
    },
    {
        question: "Quem é o deus do sol na mitologia grega?",
        image: "https://via.placeholder.com/300?text=Deus+do+Sol",
        correctAnswer: "Apolo"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    // Verifica se há perguntas restantes
    if (currentQuestionIndex >= quizData.length) {
        displayResult();
        return;
    }

    const questionData = quizData[currentQuestionIndex];
    const questionElement = document.querySelector('.question');
    const answersElement = document.querySelector('.answers');

    // Atualiza a pergunta e a imagem
    questionElement.innerHTML = `
        <p>${questionData.question}</p>
        <img src="${questionData.image}" alt="Imagem da Pergunta ${currentQuestionIndex + 1}" class="question-image">
    `;

    // Adiciona botões de resposta
    answersElement.innerHTML = `
        <button onclick="checkAnswer('${questionData.correctAnswer}')">${questionData.correctAnswer}</button>
        <button onclick="checkAnswer('Resposta errada')">Resposta errada</button>
    `;
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = quizData[currentQuestionIndex].correctAnswer;
    if (selectedAnswer === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    loadQuestion();
}

function displayResult() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <div class="result">
            <p>Você acertou ${score} de ${quizData.length} perguntas!</p>
        </div>
    `;
}

// Inicializa o quiz
loadQuestion();
