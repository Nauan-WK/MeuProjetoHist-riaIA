// Perguntas e respostas corretas
const quizData = [
    {
        question: "Qual é o nome do deus do trovão na mitologia grega?",
        image: "https://monomito.org/wp-content/uploads/zeus-origini.jpg",
        correctAnswer: "Zeus",
        options: ["Zeus", "Poseidon"]
    },
    {
        question: "Quem é a deusa da sabedoria na mitologia grega?",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSam6ll_Lgw6WfncTjQ2qsODnZ2YAHg19dFvg&s",
        correctAnswer: "Atena",
        options: ["Atena", "Afrodite"]
    },
    {
        question: "Qual deus é conhecido como o deus dos mares?",
        image: "https://via.placeholder.com/300?text=Deus+dos+Mares",
        correctAnswer: "Poseidon",
        options: ["Poseidon", "Hades"]
    },
    {
        question: "Quem é o deus do vinho e da festividade?",
        image: "https://via.placeholder.com/300?text=Deus+do+Vinho",
        correctAnswer: "Dionísio",
        options: ["Dionísio", "Apolo"]
    },
    {
        question: "Quem é o deus do sol na mitologia grega?",
        image: "https://via.placeholder.com/300?text=Deus+do+Sol",
        correctAnswer: "Apolo",
        options: ["Apolo", "Hermes"]
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    if (currentQuestionIndex >= quizData.length) {
        displayResult();
        return;
    }

    const questionData = quizData[currentQuestionIndex];
    const questionContainer = document.getElementById('question-container');
    const answersContainer = document.getElementById('answers-container');

    // Atualiza a pergunta e a imagem
    questionContainer.innerHTML = `
        <div class="question">
            <p>${questionData.question}</p>
            <img src="${questionData.image}" alt="Imagem da Pergunta ${currentQuestionIndex + 1}" class="question-image">
        </div>
    `;

    // Adiciona botões de resposta
    answersContainer.innerHTML = questionData.options.map(option => 
        `<button onclick="checkAnswer('${option}')">${option}</button>`
    ).join('');
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
    const questionContainer = document.getElementById('question-container');
    const answersContainer = document.getElementById('answers-container');

    questionContainer.innerHTML = `
        <div class="result">
            <p>Você acertou ${score} de ${quizData.length} perguntas!</p>
        </div>
    `;
    answersContainer.innerHTML = ''; // Limpa os botões de resposta
}

// Inicializa o quiz
loadQuestion();
