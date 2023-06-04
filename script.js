// const progressBar = document.querySelector(".progress-bar"),
//   progressText = document.querySelector(".progress-text");

// const progress = (value) => {
//   const percentage = (value / time) * 100;
//   progressBar.style.width = `${percentage}%`;
//   progressText.innerHTML = `${value}`;
// };

// const startBtn = document.querySelector(".start"),
//   numQuestions = document.querySelector("#num-questions"),
//   category = document.querySelector("#category"),
//   difficulty = document.querySelector("#difficulty"),
//   timePerQuestion = document.querySelector("#time"),
//   quiz = document.querySelector(".quiz"),
//   startScreen = document.querySelector(".start-screen");

// let questions = [],
//   time = 30,
//   score = 0,
//   currentQuestion,
//   timer;

// const startQuiz = () => {
//   const num = numQuestions.value,
//     cat = category.value,
//     diff = difficulty.value;
//   loadingAnimation();
//   const url = `https://opentdb.com/api.php?amount=${num}&category=${cat}&difficulty=${diff}&type=multiple`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       questions = data.results;
//       setTimeout(() => {
//         startScreen.classList.add("hide");
//         quiz.classList.remove("hide");
//         currentQuestion = 1;
//         showQuestion(questions[0]);
//       }, 1000);
//     });
// };

// startBtn.addEventListener("click", startQuiz);

// const showQuestion = (question) => {
//   const questionText = document.querySelector(".question"),
//     answersWrapper = document.querySelector(".answer-wrapper");
//   questionNumber = document.querySelector(".number");

//   questionText.innerHTML = question.question;

//   const answers = [
//     ...question.incorrect_answers,
//     question.correct_answer.toString(),
//   ];
//   answersWrapper.innerHTML = "";
//   answers.sort(() => Math.random() - 0.5);
//   answers.forEach((answer) => {
//     answersWrapper.innerHTML += `
//                   <div class="answer ">
//             <span class="text">${answer}</span>
//             <span class="checkbox">
//               <i class="fas fa-check"></i>
//             </span>
//           </div>
//         `;
//   });

//   questionNumber.innerHTML = ` Question <span class="current">${
//     questions.indexOf(question) + 1
//   }</span>
//             <span class="total">/${questions.length}</span>`;
//   //add event listener to each answer
//   const answersDiv = document.querySelectorAll(".answer");
//   answersDiv.forEach((answer) => {
//     answer.addEventListener("click", () => {
//       if (!answer.classList.contains("checked")) {
//         answersDiv.forEach((answer) => {
//           answer.classList.remove("selected");
//         });
//         answer.classList.add("selected");
//         submitBtn.disabled = false;
//       }
//     });
//   });

//   time = timePerQuestion.value;
//   startTimer(time);
// };

// const startTimer = (time) => {
//   timer = setInterval(() => {
//     if (time === 3) {
//       playAdudio("countdown.mp3");
//     }
//     if (time >= 0) {
//       progress(time);
//       time--;
//     } else {
//       checkAnswer();
//     }
//   }, 1000);
// };

// const loadingAnimation = () => {
//   startBtn.innerHTML = "Loading";
//   const loadingInterval = setInterval(() => {
//     if (startBtn.innerHTML.length === 10) {
//       startBtn.innerHTML = "Loading";
//     } else {
//       startBtn.innerHTML += ".";
//     }
//   }, 500);
// };
// function defineProperty() {
//   var osccred = document.createElement("div");
//   osccred.innerHTML =
//     "A Project By <a href='https://www.youtube.com/@opensourcecoding' target=_blank>Open Source Coding</a>";
//   osccred.style.position = "absolute";
//   osccred.style.bottom = "0";
//   osccred.style.right = "0";
//   osccred.style.fontSize = "10px";
//   osccred.style.color = "#ccc";
//   osccred.style.fontFamily = "sans-serif";
//   osccred.style.padding = "5px";
//   osccred.style.background = "#fff";
//   osccred.style.borderTopLeftRadius = "5px";
//   osccred.style.borderBottomRightRadius = "5px";
//   osccred.style.boxShadow = "0 0 5px #ccc";
//   document.body.appendChild(osccred);
// }

// defineProperty();

// const submitBtn = document.querySelector(".submit"),
//   nextBtn = document.querySelector(".next");
// submitBtn.addEventListener("click", () => {
//   checkAnswer();
// });

// nextBtn.addEventListener("click", () => {
//   nextQuestion();
//   submitBtn.style.display = "block";
//   nextBtn.style.display = "none";
// });

// const checkAnswer = () => {
//   clearInterval(timer);
//   const selectedAnswer = document.querySelector(".answer.selected");
//   if (selectedAnswer) {
//     const answer = selectedAnswer.querySelector(".text").innerHTML;
//     console.log(currentQuestion);
//     if (answer === questions[currentQuestion - 1].correct_answer) {
//       score++;
//       selectedAnswer.classList.add("correct");
//     } else {
//       selectedAnswer.classList.add("wrong");
//       const correctAnswer = document
//         .querySelectorAll(".answer")
//         .forEach((answer) => {
//           if (
//             answer.querySelector(".text").innerHTML ===
//             questions[currentQuestion - 1].correct_answer
//           ) {
//             answer.classList.add("correct");
//           }
//         });
//     }
//   } else {
//     const correctAnswer = document
//       .querySelectorAll(".answer")
//       .forEach((answer) => {
//         if (
//           answer.querySelector(".text").innerHTML ===
//           questions[currentQuestion - 1].correct_answer
//         ) {
//           answer.classList.add("correct");
//         }
//       });
//   }
//   const answersDiv = document.querySelectorAll(".answer");
//   answersDiv.forEach((answer) => {
//     answer.classList.add("checked");
//   });

//   submitBtn.style.display = "none";
//   nextBtn.style.display = "block";
// };

// const nextQuestion = () => {
//   if (currentQuestion < questions.length) {
//     currentQuestion++;
//     showQuestion(questions[currentQuestion - 1]);
//   } else {
//     showScore();
//   }
// };

// const endScreen = document.querySelector(".end-screen"),
//   finalScore = document.querySelector(".final-score"),
//   totalScore = document.querySelector(".total-score");
// const showScore = () => {
//   endScreen.classList.remove("hide");
//   quiz.classList.add("hide");
//   finalScore.innerHTML = score;
//   totalScore.innerHTML = `/ ${questions.length}`;
// };

// const restartBtn = document.querySelector(".restart");
// restartBtn.addEventListener("click", () => {
//   window.location.reload();
// });

// const playAdudio = (src) => {
//   const audio = new Audio(src);
//   audio.play();
// };

// //Amar Code

// // const quizData = [
// //   {
// //     topic: "Music",
// //     questions: [{}],
// //   },
// //   {
// //     topic: "Art",
// //     questions: [{}],
// //   },
// //   {
// //     topic: "Coding",
// //     questions: [{}],
// //   },
// // ];

// // let currentTopicIndex = 0;
// // let currentQuestionIndex = 0;
// // let userAnswers = [];

// // function displayWelcomeScreen() {
// //   const welcomeScreen = document.getElementById("welcome-screen");
// //   const startButton = document.getElementById("start-button");

// //   startButton.addEventListener("click", handleStartButtonClick);
// // }

// // function handleStartButtonClick() {
// //   const welcomeScreen = document.getElementById("welcome-screen");
// //   const quizScreen = document.getElementById("quiz-screen");
// //   const topicList = document.getElementById("topic-list");

// //   currentTopicIndex = 0;
// //   currentQuestionIndex = 0;
// //   userAnswers = [];

// //   for (let i = 0; i < quizData.length; i++) {
// //     const topicItem = document.createElement("li");
// //     topicItem.textContent = quizData[i].topic;
// //     topicItem.addEventListener("click", () => handleTopicItemClick(i));
// //     topicList.appendChild(topicItem);
// //   }

// //   welcomeScreen.style.display = "none";
// //   quizScreen.style.display = "block";
// // }

// // // Function to handle the topic item click
// // function handleTopicItemClick(topicIndex) {
// //   currentTopicIndex = topicIndex;
// //   showNextQuestion();
// // }

// // // Function to show the next question
// // function showNextQuestion() {
// //   currentQuestionIndex++;

// //   if (currentQuestionIndex < quizData[currentTopicIndex].questions.length) {
// //     const questionScreen = document.getElementById("question-screen");
// //     const question = document.getElementById("question");
// //     const choices = document.getElementById("choices");
// //     const nextButton = document.getElementById("next-button");

// //     question.textContent =
// //       quizData[currentTopicIndex].questions[currentQuestionIndex].question;

// //     // Clear previous choices
// //     choices.innerHTML = "";

// //     // Populate choices
// //     const questionChoices =
// //       quizData[currentTopicIndex].questions[currentQuestionIndex].choices;
// //     for (let i = 0; i < questionChoices.length; i++) {
// //       const choiceItem = document.createElement("li");
// //       choiceItem.textContent = questionChoices[i];
// //       choiceItem.addEventListener("click", handleChoiceItemClick);
// //       choices.appendChild(choiceItem);
// //     }

// //     nextButton.disabled = true;
// //     questionScreen.style.display = "block";
// //   } else {
// //     showQuizResults();
// //   }
// // }

// // // Function to handle the choice item click
// // function handleChoiceItemClick(event) {
// //   const choices = document.getElementById("choices");
// //   const selectedChoice = event.target.textContent;

// //   // Disable further selection for the current question
// //   for (let i = 0; i < choices.children.length; i++) {
// //     choices.children[i].removeEventListener("click", handleChoiceItemClick);
// //   }

// //   userAnswers.push(selectedChoice);
// //   const nextButton = document.getElementById("next-button");
// //   nextButton.disabled = false;
// // }

// // // Function to show the quiz results
// // function showQuizResults() {
// //   const questionScreen = document.getElementById("question-screen");
// //   const resultScreen = document.getElementById("result-screen");
// //   const correctAnswersElement = document.getElementById("correct-answers");
// //   const incorrectAnswersElement = document.getElementById("incorrect-answers");
// //   const restartButton = document.getElementById("restart-button");

// //   let correctAnswersCount = 0;
// //   let incorrectAnswersCount = 0;

// //   // Calculate correct and incorrect answers count
// //   for (let i = 0; i < quizData[currentTopicIndex].questions.length; i++) {
// //     const correctAnswer =
// //       quizData[currentTopicIndex].questions[i].correctAnswer;
// //     const userAnswer = userAnswers[i];

// //     if (correctAnswer === userAnswer) {
// //       correctAnswersCount++;
// //     } else {
// //       incorrectAnswersCount++;
// //     }
// //   }

// //   correctAnswersElement.textContent = correctAnswersCount;
// //   incorrectAnswersElement.textContent = incorrectAnswersCount;

// //   questionScreen.style.display = "none";
// //   resultScreen.style.display = "block";

// //   restartButton.addEventListener("click", handleRestartButtonClick);
// // }

// // // Function to handle the Restart Quiz button click
// // function handleRestartButtonClick() {
// //   const resultScreen = document.getElementById("result-screen");
// //   const quizScreen = document.getElementById("quiz-screen");

// //   resultScreen.style.display = "none";
// //   quizScreen.style.display = "block";
// //   showNextQuestion();
// // }

// // // Display the welcome screen when the app is launched
// //displayWelcomeScreen();

let quizData = {
  music: [
    {
      id: 1,
      question: "Which of the following is not a type of music notation?",
      options: [
        "Standard notation",
        "Tab notation",
        "Morse code notation",
        "Graphics notation",
      ],
      answer: "Morse code notation",
      category: "music",
    },
    {
      id: 2,
      question: "What is the most common time signature in classical music?",
      options: ["3/4", "4/4", "5/4", "6/8"],
      answer: "4/4",
      category: "music",
    },
    {
      id: 3,
      question:
        "Which of the following is not a type of instrument in a symphony orchestra?",
      options: ["Violin", "Piano", "Harp", "Theremin"],
      answer: "Theremin",
      category: "music",
    },
    {
      id: 4,
      question: "What is the most common key in pop music?",
      options: ["C Major", "G Major", "D Major", "A Major"],
      answer: "C Major",
      category: "music",
    },
    {
      id: 5,
      question: "Which of the following is not a type of chord?",
      options: ["Major", "Minor", "Diminished", "Flat"],
      answer: "Flat",
      category: "music",
    },
    {
      id: 6,
      question: "Which of the following is not a type of music genre?",
      options: ["Jazz", "Blues", "Rock", "Applesauce"],
      answer: "Applesauce",
      category: "music",
    },
    {
      id: 7,
      question: "Which of the following is not a type of music theory?",
      options: ["Harmony", "Counterpoint", "Form", "Cooking"],
      answer: "Cooking",
      category: "music",
    },
    {
      id: 8,
      question: "What is the most common tempo marking in classical music?",
      options: ["Allegro", "Andante", "Adagio", "Moderato"],
      answer: "Allegro",
      category: "music",
    },
    {
      id: 9,
      question: "Which of the following is not a type of musical form?",
      options: ["Sonata", "Symphony", "Concerto", "Spaghetti"],
      answer: "Spaghetti",
      category: "music",
    },
    {
      id: 10,
      question:
        "Which of the following is not a type of music notation software?",
      options: ["Sibelius", "Finale", "MuseScore", "Microsoft Word"],
      answer: "Microsoft Word",
      category: "music",
    },
  ],
  "modern-art": [
    {
      id: 11,
      question: "Which artist is known for coining the term 'Surrealism'?",
      options: [
        "Pablo Picasso",
        "Salvador Dali",
        "Vincent van Gogh",
        "Henri Matisse",
      ],
      answer: "Salvador Dali",
      category: "modern-art",
    },
    {
      id: 12,
      question:
        "Which movement is associated with the use of abstract forms and shapes in art?",
      options: ["Impressionism", "Expressionism", "Futurism", "Cubism"],
      answer: "Cubism",
      category: "modern-art",
    },
    {
      id: 13,
      question:
        "Which artist is known for painting the work 'The Persistence of Memory'?",
      options: [
        "Pablo Picasso",
        "Salvador Dali",
        "Vincent van Gogh",
        "Henri Matisse",
      ],
      answer: "Salvador Dali",
      category: "modern-art",
    },
    {
      id: 14,
      question: "Which artist is known for creating the painting 'The Scream'?",
      options: [
        "Vincent van Gogh",
        "Salvador Dali",
        "Edvard Munch",
        "Claude Monet",
      ],
      answer: "Edvard Munch",
      category: "modern-art",
    },
    {
      id: 15,
      question:
        "What movement was associated with the use of bold, bright colors and thick brushstrokes?",
      options: ["Impressionism", "Expressionism", "Fauvism", "Cubism"],
      answer: "Fauvism",
      category: "modern-art",
    },
    {
      id: 16,
      question:
        "What movement was associated with the use of bright colors, simplified forms, and a focus on movement and speed",
      options: [
        "Impressionism",
        "Futurism",
        "Surrealism",
        "Abstract Expressionism",
      ],
      answer: "Futurism",
      category: "modern-art",
    },
    {
      id: 17,
      question:
        "Which artist is known for creating the painting 'Water Lilies'?",
      options: ["Claude Monet", "Paul Cezanne", "Paul Gauguin", "Paul Klee"],
      answer: "Claude Monet",
      category: "modern-art",
    },
    {
      id: 18,
      question:
        "Which artist is known for creating the painting 'Les Demoiselles d'Avignon'?",
      options: [
        "Henri Matisse",
        "Vincent van Gogh",
        "Salvador Dali",
        "Pablo Picasso",
      ],
      answer: "Pablo Picasso",
      category: "modern-art",
    },
    {
      id: 19,
      question: "Which artist is known for creating the painting 'Guernica'?",
      options: [
        "Claude Mone",
        "Paul Cezanne",
        "Pablo Picasso",
        "Vincent van Gogh",
      ],
      answer: "Pablo Picasso",
      category: "modern-art",
    },
    {
      id: 20,
      question:
        "Which artist is known for creating the sculpture 'The Thinker'?",
      options: ["Auguste Rodin", "Alexander Calder", "Jean Arp", "Henry Moore"],
      answer: "Auguste Rodin",
      category: "modern-art",
    },
  ],
  coding: [
    {
      id: 21,
      question: "What is the correct syntax for an if statement in Python?",
      options: [
        "if (condition):",
        "if condition",
        "if: condition",
        "if condition:",
      ],
      answer: "if condition:",
      category: "coding",
    },
    {
      id: 22,
      question: "Which of the following is not a data type in JavaScript?",
      options: ["String", "Number", "Boolean", "ArrayList"],
      answer: "ArrayList",
      category: "coding",
    },
    {
      id: 23,
      question: "Which of the following is used to declare a variable in Java?",
      options: ["var", "let", "const", "int"],
      answer: "int",
      category: "coding",
    },
    {
      id: 24,
      question: "What is the correct syntax for a for loop in C#?",
      options: [
        "for i = 0 to 10",
        "for (i = 0; i <= 10; i++)",
        "for (int i = 0; i <= 10)",
        "for i in range(0, 10)",
      ],
      answer: "for (i = 0; i <= 10; i++)",
      category: "coding",
    },
    {
      id: 25,
      question: "Which of the following is not a looping structure in PHP?",
      options: ["while", "for", "do-while", "foreach"],
      answer: "foreach",
      category: "coding",
    },
    {
      id: 26,
      question: "Which of the following is not a valid operator in C++?",
      options: ["+", "-", "*", "$"],
      answer: "$",
      category: "coding",
    },
    {
      id: 27,
      question:
        "In which programming language is 'print' used for displaying output?",
      options: ["Python", "JavaScript", "Java", "C++"],
      answer: "Python",
      category: "coding",
    },
    {
      id: 28,
      question: "What is the correct syntax for a function in Ruby?",
      options: ["function name()", "def name", "function name", "def name()"],
      answer: "def name()",
      category: "coding",
    },
    {
      id: 29,
      question: "Which of the following is not a type of variable in Swift?",
      options: ["Int", "String", "Double", "Object"],
      answer: "Object",
      category: "coding",
    },
    {
      id: 30,
      question: "In which programming language is '#' used for commenting?",
      options: ["Python", "JavaScript", "Java", "C++"],
      answer: "C++",
      category: "coding",
    },
  ],
};

// this is for the category attempt only once
let categories = ["music", "coding", "modern-art"];
let categoryAttempts = {
  music: false,
  coding: false,
  "modern-art": false,
};

let currentCategory;
let currentQuestion = 0;
let score = 0;

function startQuiz(category) {
  if (categoryAttempts[category]) {
    prompt("You have already attempted this category."); // user will get the alert.
    return;
  }

  currentCategory = category;
  currentQuestion = 0;
  score = 0;
  categoryAttempts[category] = true;

  // for generating the questions
  let questionBox = document.getElementById("questionBox");
  let allInputs = document.querySelectorAll("input[type='radio']");
  const loadQuestion = () => {
    if (total === index) {
      return quizEnd();
    }
    reset();
    const data = quizData[index];
    questionBox.innerHTML = `${index + 1}) ${data.question}`;
  };
  document.querySelector("#next").addEventListener("click", function () {
    const data = quizData[index];
    const ans = getAnswer();
    if (ans === data.correct) {
      correct++;
    } else {
      incorrect++;
    }
    index++;
    loadQuestion();
  });

  let categoryElement = document.getElementById("category");
  let quizElement = document.getElementById("quiz");
  let resultElement = document.getElementById("result");

  categoryElement.style.display = "none";
  quizElement.style.display = "block";
  resultElement.style.display = "none";

  renderQuestion();
}

function renderQuestion() {
  let quizElement = document.getElementById("quiz");
  quizElement.innerHTML = "";

  let question = quizData[currentCategory][currentQuestion];

  let questionElement = document.createElement("div");
  questionElement.innerHTML =
    "<h3>Question " + (currentQuestion + 1) + ":</h3>";
  questionElement.innerHTML += "<p>" + question.question + "</p>";

  let optionsElement = document.createElement("ul");
  question.options.forEach(function (option) {
    let optionElement = document.createElement("li");
    optionElement.textContent = option;
    optionElement.addEventListener("click", function () {
      checkAnswer(option, question.answer);
    });
    optionsElement.appendChild(optionElement);
  });

  questionElement.appendChild(optionsElement);
  quizElement.appendChild(questionElement);

  renderButtons();
}
// function for the next and previous buttons
function renderButtons() {
  let quizElement = document.getElementById("quiz");
  let buttonElement = document.createElement("div");
  buttonElement.className = "button-container";

  let previousButton = document.createElement("button");
  previousButton.textContent = "Previous";
  previousButton.addEventListener("click", function () {
    previousQuestion();
  });

  let nextButton = document.createElement("button");
  nextButton.textContent = "Next";
  nextButton.addEventListener("click", function () {
    nextQuestion();
  });

  buttonElement.appendChild(previousButton);
  buttonElement.appendChild(nextButton);

  if (currentQuestion === 0) {
    previousButton.disabled = true;
  }

  if (currentQuestion === quizData[currentCategory].length - 1) {
    nextButton.textContent = "Finish";
  }

  quizElement.appendChild(buttonElement);
}

function previousQuestion() {
  currentQuestion--;
  renderQuestion();
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData[currentCategory].length) {
    renderQuestion();
  } else {
    showResult();
  }
}
// To check the answers of the the given question
function checkAnswer(selectedOption, correctAnswer) {
  if (selectedOption === correctAnswer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData[currentCategory].length) {
    renderQuestion();
  } else {
    showResult();
  }
}

// to show the result on screen
function showResult() {
  let quizElement = document.getElementById("quiz");
  let resultElement = document.getElementById("result");
  let scoreElement = document.getElementById("score");

  quizElement.style.display = "none";
  resultElement.style.display = "block";

  // this will display the score
  scoreElement.textContent =
    score + " out of " + quizData[currentCategory].length;

  // to  Store the quiz result in local storage
  localStorage.setItem("quizResult", score);
}
// Check if a quiz score exists in local storage
let storedScore = localStorage.getItem("quizScore");
if (storedScore !== null) {
  var scoreElement = document.getElementById("score");
  scoreElement.textContent =
    storedScore + " out of " + quizData[currentCategory].length;
}
// Retrieve the quiz result from local storage on page load
window.onload;

function restartQuiz() {
  let categoryElement = document.getElementById("category");

  let resultElement = document.getElementById("result");

  let restartButton = document.getElementById("restart");

  categoryElement.style.display = "block";
  resultElement.style.display = "none";
  restartButton.style.display = "none";
}
