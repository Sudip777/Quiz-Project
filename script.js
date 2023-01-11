const quizQuestions = [
  {
    question: "Q1.What is JavaScript?",
    a: "JavaScript is a scripting language used to make the website interactive",
    b: "JavaScript is an assembly language used to make the website interactive",
    c: "JavaScript is a compiled language used to make the website interactive",
    d: "None of the mentioned",
    ans: "ans1",
  },
  {
    question: "Q2.Which of the following is correct about JavaScript?",

    a: "JavaScript is an Object-Based language",
    b: "JavaScript is Assembly-language",
    c: "JavaScript is an Object-Oriented language",
    d: "JavaScript is a High-level language",
    ans: "ans1",
  },
  {
    question:
      "Q3. Arrays in JavaScript are defined by which of the following statements?",
    a: "It is an ordered list of values",
    b: "It is an ordered list of objects",
    c: " It is an ordered list of string",
    d: "It is an ordered list of functions",
    ans: "ans1",
  },
  {
    question: "Q4. Which of the following is not javascript data types?",
    a: "Null type",
    b: " Undefined type",
    c: "Number type",
    d: "All of the mentioned",
    ans: "ans4",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer"); // answer class is common in all input tags
const showScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  const questionList = quizQuestions[questionCount];
  question.innerHTML = questionList.question;

  option1.innerHTML = questionList.a;
  option2.innerHTML = questionList.b;
  option3.innerHTML = questionList.c;
  option4.innerHTML = questionList.d;
};

loadQuestion();

const getCheckAnswer = () => {
  let answer;

  answers.forEach((currentAnswerElement) => {
    if (currentAnswerElement.checked) {
      // checked method is bilt-in js method
      answer = currentAnswerElement.id;
    }
  });
  return answer;
};

const diselectAll = () => {
  answers.forEach((curAnsElem) => {
    curAnsElem.checked = false;
  });
};
submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);

  if (checkedAnswer === quizQuestions[questionCount].ans) {
    score++;
  }

  questionCount++;
  diselectAll();
  if (questionCount < quizQuestions.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
    <h3> You scored ${score} / ${quizQuestions.length}👌🔥</h3>
    <button class="btn" onclick = "location.reload()"> Play Again</button>
    
    `;
    showScore.classList.remove("scoreArea");
  }
});
