// Quiz Data
const quizData = {
  //
  //     {
  //       question: "Which of the following is not a type of music notation?",
  //       options: [
  //         "Standard notation",
  //         "Tab notation",
  //         "Morse code notation",
  //         "Graphics notation",
  //       ],
  //       answer: 3,
  //     },
  //     {
  //       question: "What is the most common time signature in classical music?",
  //       options: ["3/4", "4/4", "5/4", "6/8"],
  //       answer: "4/4",
  //     },
  //     {
  //       question:
  //         "Which of the following is not a type of instrument in a symphony orchestra?",
  //       options: ["Violin", "Piano", "Harp", "Theremin"],
  //       answer: "Theremin",
  //     },
  //     {
  //       question: "What is the most common key in pop music?",
  //       options: ["C Major", "G Major", "D Major", "A Major"],
  //       answer: "C Major",
  //     },
  //     {
  //       question: "Which of the following is not a type of chord?",
  //       options: ["Major", "Minor", "Diminished", "Flat"],
  //       answer: "Flat",
  //     },
  //     {
  //       question: "Which of the following is not a type of music genre?",
  //       options: ["Jazz", "Blues", "Rock", "Applesauce"],
  //       answer: "Applesauce",
  //     },
  //     {
  //       question: "Which of the following is not a type of music theory?",
  //       options: ["Harmony", "Counterpoint", "Form", "Cooking"],
  //       answer: "Cooking",
  //     },
  //     {
  //       question: "What is the most common tempo marking in classical music?",
  //       options: ["Allegro", "Andante", "Adagio", "Moderato"],
  //       answer: "Allegro",
  //     },
  //     {
  //       question: "Which of the following is not a type of musical form?",
  //       options: ["Sonata", "Symphony", "Concerto", "Spaghetti"],
  //       answer: "Spaghetti",
  //     },
  //     {
  //       question:
  //         "Which of the following is not a type of music notation software?",
  //       options: ["Sibelius", "Finale", "MuseScore", "Microsoft Word"],
  //       answer: "Microsoft Word",
  //     },
  //   ],
  //   "modern-art": [
  //     {
  //       question: "Which artist is known for coining the term 'Surrealism'?",
  //       options: [
  //         "Pablo Picasso",
  //         "Salvador Dali",
  //         "Vincent van Gogh",
  //         "Henri Matisse",
  //       ],
  //       answer: "Salvador Dali",
  //     },
  //     {
  //       question:
  //         "Which movement is associated with the use of abstract forms and shapes in art?",
  //       options: ["Impressionism", "Expressionism", "Futurism", "Cubism"],
  //       answer: "Cubism",
  //     },
  //     {
  //       question:
  //         "Which artist is known for painting the work 'The Persistence of Memory'?",
  //       options: [
  //         "Pablo Picasso",
  //         "Salvador Dali",
  //         "Vincent van Gogh",
  //         "Henri Matisse",
  //       ],
  //       answer: "Salvador Dali",
  //     },
  //     {
  //       question: "Which artist is known for creating the painting 'The Scream'?",
  //       options: [
  //         "Vincent van Gogh",
  //         "Salvador Dali",
  //         "Edvard Munch",
  //         "Claude Monet",
  //       ],
  //       answer: "Edvard Munch",
  //     },
  //     {
  //       question:
  //         "What movement was associated with the use of bold, bright colors and thick brushstrokes?",
  //       options: ["Impressionism", "Expressionism", "Fauvism", "Cubism"],
  //       answer: "Fauvism",
  //     },
  //     {
  //       question:
  //         "What movement was associated with the use of bright colors, simplified forms, and a focus on movement and speed",
  //       options: [
  //         "Impressionism",
  //         "Futurism",
  //         "Surrealism",
  //         "Abstract Expressionism",
  //       ],
  //       answer: "Futurism",
  //     },
  //     {
  //       question:
  //         "Which artist is known for creating the painting 'Water Lilies'?",
  //       options: ["Claude Monet", "Paul Cezanne", "Paul Gauguin", "Paul Klee"],
  //       answer: "Claude Monet",
  //     },
  //     {
  //       question:
  //         "Which artist is known for creating the painting 'Les Demoiselles d'Avignon'?",
  //       options: [
  //         "Henri Matisse",
  //         "Vincent van Gogh",
  //         "Salvador Dali",
  //         "Pablo Picasso",
  //       ],
  //       answer: "Pablo Picasso",
  //     },
  //     {
  //       question: "Which artist is known for creating the painting 'Guernica'?",
  //       options: [
  //         "Claude Mone",
  //         "Paul Cezanne",
  //         "Pablo Picasso",
  //         "Vincent van Gogh",
  //       ],
  //       answer: "Pablo Picasso",
  //     },
  //     {
  //       question:
  //         "Which artist is known for creating the sculpture 'The Thinker'?",
  //       options: ["Auguste Rodin", "Alexander Calder", "Jean Arp", "Henry Moore"],
  //       answer: "Auguste Rodin",
  //     },
  //   ],
  //   coding: [
  //     {
  //       question: "What is the correct syntax for an if statement in Python?",
  //       options: [
  //         "if (condition):",
  //         "if condition",
  //         "if: condition",
  //         "if condition:",
  //       ],
  //       answer: "if condition:",
  //     },
  //     {
  //       question: "Which of the following is not a data type in JavaScript?",
  //       options: ["String", "Number", "Boolean", "ArrayList"],
  //       answer: "ArrayList",
  //     },
  //     {
  //       question: "Which of the following is used to declare a variable in Java?",
  //       options: ["var", "let", "const", "int"],
  //       answer: "int",
  //     },
  //     {
  //       question: "What is the correct syntax for a for loop in C#?",
  //       options: [
  //         "for i = 0 to 10",
  //         "for (i = 0; i <= 10; i++)",
  //         "for (int i = 0; i <= 10)",
  //         "for i in range(0, 10)",
  //       ],
  //       answer: "for (i = 0; i <= 10; i++)",
  //     },
  //     {
  //       question: "Which of the following is not a looping structure in PHP?",
  //       options: ["while", "for", "do-while", "foreach"],
  //       answer: "foreach",
  //     },
  //     {
  //       question: "Which of the following is not a valid operator in C++?",
  //       options: ["+", "-", "*", "$"],
  //       answer: "$",
  //     },
  //     {
  //       question:
  //         "In which programming language is 'print' used for displaying output?",
  //       options: ["Python", "JavaScript", "Java", "C++"],
  //       answer: "Python",
  //     },
  //     {
  //       question: "What is the correct syntax for a function in Ruby?",
  //       options: ["function name()", "def name", "function name", "def name()"],
  //       answer: "def name()",
  //     },
  //     {
  //       question: "Which of the following is not a type of variable in Swift?",
  //       options: ["Int", "String", "Double", "Object"],
  //       answer: "Object",
  //     },
  //     {
  //       question: "In which programming language is '#' used for commenting?",
  //       options: ["Python", "JavaScript", "Java", "C++"],
  //       answer: "C++",
  //     },
  //   ],

  music: [
    {
      question: "Which of the following is not a type of music notation?",
      options: [
        "Standard notation",
        "Tab notation",
        "Morse code notation",
        "Graphics notation",
      ],
      answer: 2,
    },
    {
      question: "What is the most common time signature in classical music?",
      options: ["3/4", "4/4", "5/4", "6/8"],
      answer: 1,
    },
    {
      question:
        "Which of the following is not a type of instrument in a symphony orchestra?",
      options: ["Violin", "Piano", "Harp", "Theremin"],
      answer: 3,
    },
    {
      question: "What is the most common key in pop music?",
      options: ["C Major", "G Major", "D Major", "A Major"],
      answer: 0,
    },
    {
      question: "Which of the following is not a type of chord?",
      options: ["Major", "Minor", "Diminished", "Flat"],
      answer: 3,
    },
    {
      question: "Which of the following is not a type of music genre?",
      options: ["Jazz", "Blues", "Rock", "Applesauce"],
      answer: 3,
    },
    {
      question: "Which of the following is not a type of music theory?",
      options: ["Harmony", "Counterpoint", "Form", "Cooking"],
      answer: 3,
    },
    {
      question: "What is the most common tempo marking in classical music?",
      options: ["Allegro", "Andante", "Adagio", "Moderato"],
      answer: 0,
    },
    {
      question: "Which of the following is not a type of musical form?",
      options: ["Sonata", "Symphony", "Concerto", "Spaghetti"],
      answer: 3,
    },
    {
      question:
        "Which of the following is not a type of music notation software?",
      options: ["Sibelius", "Finale", "MuseScore", "Microsoft Word"],
      answer: 3,
    },
  ],
  "modern-art": [
    {
      question: "Which artist is known for coining the term 'Surrealism'?",
      options: [
        "Pablo Picasso",
        "Salvador Dali",
        "Vincent van Gogh",
        "Henri Matisse",
      ],
      answer: 1,
    },
    {
      question:
        "Which movement is associated with the use of abstract forms and shapes in art?",
      options: ["Impressionism", "Expressionism", "Futurism", "Cubism"],
      answer: 3,
    },
    {
      question:
        "Which artist is known for painting the work 'The Persistence of Memory'?",
      options: [
        "Pablo Picasso",
        "Salvador Dali",
        "Vincent van Gogh",
        "Henri Matisse",
      ],
      answer: 1,
    },
    {
      question: "Which artist is known for creating the painting 'The Scream'?",
      options: [
        "Vincent van Gogh",
        "Salvador Dali",
        "Edvard Munch",
        "Claude Monet",
      ],
      answer: 2,
    },
    {
      question:
        "What movement was associated with the use of bold, bright colors and thick brushstrokes?",
      options: ["Impressionism", "Expressionism", "Fauvism", "Cubism"],
      answer: 2,
    },
    {
      question:
        "What movement was associated with the use of bright colors, simplified forms, and a focus on movement and speed?",
      options: [
        "Impressionism",
        "Futurism",
        "Surrealism",
        "Abstract Expressionism",
      ],
      answer: 1,
    },
    {
      question:
        "Which artist is known for creating the painting 'Water Lilies'?",
      options: ["Claude Monet", "Paul Cezanne", "Paul Gauguin", "Paul Klee"],
      answer: 0,
    },
    {
      question:
        "Which artist is known for creating the painting 'Les Demoiselles d'Avignon'?",
      options: [
        "Henri Matisse",
        "Vincent van Gogh",
        "Salvador Dali",
        "Pablo Picasso",
      ],
      answer: 3,
    },
    {
      question: "Which artist is known for creating the painting 'Guernica'?",
      options: [
        "Claude Mone",
        "Paul Cezanne",
        "Pablo Picasso",
        "Vincent van Gogh",
      ],
      answer: 2,
    },
    {
      question:
        "Which artist is known for creating the sculpture 'The Thinker'?",
      options: ["Auguste Rodin", "Alexander Calder", "Jean Arp", "Henry Moore"],
      answer: 0,
    },
  ],
  coding: [
    {
      question: "What is the correct syntax for an if statement in Python?",
      options: [
        "if (condition):",
        "if condition",
        "if: condition",
        "if condition:",
      ],
      answer: 3,
    },
    {
      question: "Which of the following is not a data type in JavaScript?",
      options: ["String", "Number", "Boolean", "ArrayList"],
      answer: 3,
    },
    {
      question: "Which of the following is used to declare a variable in Java?",
      options: ["var", "let", "const", "int"],
      answer: 3,
    },
    {
      question: "What is the correct syntax for a for loop in C#?",
      options: [
        "for i = 0 to 10",
        "for (i = 0; i <= 10; i++)",
        "for (int i = 0; i <= 10)",
        "for i in range(0, 10)",
      ],
      answer: 1,
    },
    {
      question: "Which of the following is not a looping structure in PHP?",
      options: ["while", "for", "do-while", "foreach"],
      answer: 3,
    },
    {
      question: "Which of the following is not a valid operator in C++?",
      options: ["+", "-", "*", "$"],
      answer: 3,
    },
    {
      question:
        "In which programming language is 'print' used for displaying output?",
      options: ["Python", "JavaScript", "Java", "C++"],
      answer: 0,
    },
    {
      question: "What is the correct syntax for a function in Ruby?",
      options: ["function name()", "def name", "function name", "def name()"],
      answer: 3,
    },
    {
      question: "Which of the following is not a type of variable in Swift?",
      options: ["Int", "String", "Double", "Object"],
      answer: 3,
    },
    {
      question: "In which programming language is '#' used for commenting?",
      options: ["Python", "JavaScript", "Java", "C++"],
      answer: 3,
    },
  ],
};

// Global Variables
const categorySelect = document.getElementById("category-select");
const startButton = document.getElementById("start-button");
const quizContainer = document.getElementById("quiz");
const questionNumber = document.getElementById("question-number");
const questionElement = document.getElementById("question");
const optionsList = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const returnButton = document.getElementById("return-button");
const reportContainer = document.getElementById("report");
const scoreElement = document.getElementById("score");
const correctAnswersElement = document.getElementById("correct-answers");
const incorrectAnswersElement = document.getElementById("incorrect-answers");

let currentCategory;
let currentQuestionIndex;
let score;
let selectedAnswers;

// Event Listeners
startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", loadNextQuestion);
returnButton.addEventListener("click", returnToMainPage);

// Initialize Quiz
function startQuiz() {
  const selectedCategory = categorySelect.value;
  currentCategory = quizData[selectedCategory];
  currentQuestionIndex = 0;
  score = 0;
  selectedAnswers = [];

  categorySelect.disabled = true;
  startButton.disabled = true;
  quizContainer.style.display = "block";
  reportContainer.style.display = "none";

  loadQuestion();
}

// Load Question
function loadQuestion() {
  const currentQuestion = currentCategory[currentQuestionIndex];

  questionNumber.innerText = `Question ${currentQuestionIndex + 1}`;
  questionElement.innerText = currentQuestion.question;
  optionsList.innerHTML = "";

  for (let i = 0; i < currentQuestion.options.length; i++) {
    const option = document.createElement("li");
    option.innerText = currentQuestion.options[i];
    option.addEventListener("click", selectOption);
    optionsList.appendChild(option);
  }

  nextButton.disabled = true;
}

// Select Option
function selectOption(event) {
  const selectedOption = event.target;
  const selectedOptionIndex = Array.from(optionsList.children).indexOf(
    selectedOption
  );

  if (!selectedAnswers[currentQuestionIndex]) {
    // Allow selection only if no answer is selected previously
    Array.from(optionsList.children).forEach((option) =>
      option.classList.remove("selected")
    );

    selectedOption.classList.add("selected");
    nextButton.disabled = false;
    selectedAnswers[currentQuestionIndex] = selectedOptionIndex;
  }
}

// Load Next Question
function loadNextQuestion() {
  const selectedOptionIndex = selectedAnswers[currentQuestionIndex];

  if (selectedOptionIndex !== undefined) {
    const currentQuestion = currentCategory[currentQuestionIndex];
    const correctAnswerIndex = currentQuestion.answer;

    if (selectedOptionIndex === correctAnswerIndex) {
      score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < currentCategory.length) {
      loadQuestion();
    } else {
      showQuizReport();
    }
  }
}

// Show Quiz Report
function showQuizReport() {
  quizContainer.style.display = "none";
  reportContainer.style.display = "block";

  scoreElement.innerText = `Score: ${score}/${currentCategory.length}`;
  correctAnswersElement.innerText = `Correct Answers: ${score}`;
  incorrectAnswersElement.innerText = `Incorrect Answers: ${
    currentCategory.length - score
  }`;

  categorySelect.disabled = false;
  startButton.disabled = false;
}

// Return to Main Page
function returnToMainPage() {
  quizContainer.style.display = "none";
  reportContainer.style.display = "none";
  categorySelect.disabled = false;
  startButton.disabled = false;
}
