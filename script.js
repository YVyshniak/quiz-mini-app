Telegram.WebApp.ready();

const questions = [
  {
    q: "Хто винайшов телескоп?",
    a: ["Галілео Галілей", "Ісаак Ньютон", "Ганс Ліпперсгей"],
    correct: "Ганс Ліпперсгей"
  },
  {
    q: "Хто написав 'Кобзар'?",
    a: ["Іван Франко", "Тарас Шевченко", "Леся Українка"],
    correct: "Тарас Шевченко"
  },
  {
    q: "Столиця Канади?",
    a: ["Торонто", "Оттава", "Монреаль"],
    correct: "Оттава"
  },
  {
    q: "Який хімічний елемент позначається як 'O'?",
    a: ["Золото", "Кисень", "Олово"],
    correct: "Кисень"
  },
  {
    q: "Скільки планет у Сонячній системі?",
    a: ["8", "9", "7"],
    correct: "8"
  },
  {
    q: "Яка найбільша тварина у світі?",
    a: ["Слон", "Синій кит", "Кашалот"],
    correct: "Синій кит"
  },
  {
    q: "Який континент найбільший за площею?",
    a: ["Африка", "Азія", "Америка"],
    correct: "Азія"
  },
  {
    q: "Який птах не вміє літати?",
    a: ["Орел", "Пінгвін", "Гуска"],
    correct: "Пінгвін"
  },
  {
    q: "Яка мова є державною в Бразилії?",
    a: ["Іспанська", "Португальська", "Англійська"],
    correct: "Португальська"
  },
  {
    q: "Скільки буде 7 × 8?",
    a: ["54", "56", "64"],
    correct: "56"
  }
];

let current = 0;
let score = 0;
const questionTitle = document.getElementById("question-title");
const answersContainer = document.getElementById("answers");
const resultEl = document.getElementById("result");

function showQuestion() {
  const q = questions[current];
  questionTitle.textContent = `Питання ${current + 1} з ${questions.length}: ${q.q}`;
  answersContainer.innerHTML = "";
  q.a.forEach(ans => {
    const btn = document.createElement("button");
    btn.textContent = ans;
    btn.onclick = () => handleAnswer(ans);
    answersContainer.appendChild(btn);
  });
}

function handleAnswer(answer) {
  const correct = questions[current].correct;
  if (answer === correct) score++;

  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  questionTitle.textContent = "Вікторина завершена!";
  answersContainer.innerHTML = "";
  resultEl.textContent = `Ваш результат: ${score} з ${questions.length}`;
  resultEl.classList.remove("hidden");

  Telegram.WebApp.MainButton.setText("Надіслати результат").show();
  Telegram.WebApp.MainButton.onClick(() => {
    Telegram.WebApp.sendData(JSON.stringify({
      score: score,
      total: questions.length
    }));
    Telegram.WebApp.close();
  });
}

showQuestion();
