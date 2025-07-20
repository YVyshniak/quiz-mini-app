
{questions_js}

Telegram.WebApp.ready();

let selectedQuestions = [];
let current = 0;
let score = 0;
const questionTitle = document.getElementById("question-title");
const answersContainer = document.getElementById("answers");
const resultEl = document.getElementById("result");
const restartBtn = document.getElementById("restart-btn");

function shuffle(array) {{
  for (let i = array.length - 1; i > 0; i--) {{
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }}
}}

function startQuiz() {{
  score = 0;
  current = 0;
  resultEl.classList.add("hidden");
  restartBtn.classList.add("hidden");
  Telegram.WebApp.MainButton.hide();
  selectedQuestions = [...allQuestions];
  shuffle(selectedQuestions);
  selectedQuestions = selectedQuestions.slice(0, 10);
  showQuestion();
}}

function showQuestion() {{
  const q = selectedQuestions[current];
  questionTitle.textContent = `Питання ${current + 1} з 10: ${q.q}`;
  answersContainer.innerHTML = "";
  q.a.forEach(ans => {{
    const btn = document.createElement("button");
    btn.textContent = ans;
    btn.onclick = () => handleAnswer(btn, ans);
    answersContainer.appendChild(btn);
  }});
}}

function handleAnswer(button, answer) {{
  const q = selectedQuestions[current];
  const buttons = answersContainer.querySelectorAll("button");
  buttons.forEach(btn => {{
    btn.disabled = true;
    if (btn.textContent === q.correct) {{
      btn.classList.add("correct");
    }} else if (btn === button) {{
      btn.classList.add("incorrect");
    }}
  }});
  if (answer === q.correct) score++;
  current++;
  setTimeout(() => {{
    if (current < 10) {{
      showQuestion();
    }} else {{
      endQuiz();
    }}
  }}, 1000);
}}

function endQuiz() {{
  questionTitle.textContent = "Вікторина завершена!";
  answersContainer.innerHTML = "";
  resultEl.textContent = `Ваш результат: ${score} з 10`;
  resultEl.classList.remove("hidden");
  restartBtn.classList.remove("hidden");

  Telegram.WebApp.MainButton.setText("Надіслати результат").show();
  Telegram.WebApp.MainButton.onClick(() => {{
    Telegram.WebApp.sendData(JSON.stringify({{
      score: score,
      total: 10
    }}));
    Telegram.WebApp.close();
  }});
}}

restartBtn.onclick = startQuiz;
startQuiz();
