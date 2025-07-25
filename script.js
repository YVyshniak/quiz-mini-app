
const allQuestions = [{"q": "Яка столиця Франції?", "a": ["Мадрид", "Берлін", "Париж"], "correct": "Париж"}, {"q": "Скільки континентів на Землі?", "a": ["5", "6", "7"], "correct": "7"}, {"q": "Хто написав 'Кобзар'?", "a": ["Леся Українка", "Іван Франко", "Тарас Шевченко"], "correct": "Тарас Шевченко"}, {"q": "Яка найбільша планета Сонячної системи?", "a": ["Сатурн", "Земля", "Юпітер"], "correct": "Юпітер"}, {"q": "Яке море найсолоніше у світі?", "a": ["Каспійське море", "Мертве море", "Червоне море"], "correct": "Мертве море"}, {"q": "Скільки буде 7 × 8?", "a": ["56", "64", "54"], "correct": "56"}, {"q": "Який елемент має хімічний символ O?", "a": ["Залізо", "Водень", "Кисень"], "correct": "Кисень"}, {"q": "Яка країна виграла ЧС з футболу 2018?", "a": ["Франція", "Хорватія", "Німеччина"], "correct": "Франція"}, {"q": "Яке місто є столицею Канади?", "a": ["Торонто", "Оттава", "Монреаль"], "correct": "Оттава"}, {"q": "Хто відкрив Америку?", "a": ["Христофор Колумб", "Джеймс Кук", "Васко да Гама"], "correct": "Христофор Колумб"}, {"q": "Яка тварина є найбільшою на Землі?", "a": ["Африканський слон", "Білий ведмідь", "Синій кит"], "correct": "Синій кит"}, {"q": "Яка річка найдовша у світі?", "a": ["Ніл", "Міссісіпі", "Амазонка"], "correct": "Ніл"}, {"q": "Хто намалював 'Мону Лізу'?", "a": ["Мікеланджело", "Леонардо да Вінчі", "Пабло Пікассо"], "correct": "Леонардо да Вінчі"}, {"q": "Який найвищий водоспад у світі?", "a": ["Іґуасу", "Ніагара", "Анхель"], "correct": "Анхель"}, {"q": "Скільки триватиме один рік на Землі?", "a": ["360 днів", "366 днів", "365 днів"], "correct": "365 днів"}, {"q": "Яка валюта в Японії?", "a": ["Юань", "Вон", "Єна"], "correct": "Єна"}, {"q": "У якому місті знаходиться Бранденбурзькі ворота?", "a": ["Відень", "Прага", "Берлін"], "correct": "Берлін"}, {"q": "Скільки зубів у дорослої людини?", "a": ["30", "32", "28"], "correct": "32"}, {"q": "Хто є автором 'Гаррі Поттера'?", "a": ["Дж. Р. Р. Толкін", "Стівен Кінг", "Джоан Роулінг"], "correct": "Джоан Роулінг"}, {"q": "Який колір у центрі прапора України?", "a": ["Немає", "Синій", "Жовтий"], "correct": "Немає"}, {"q": "Який м'яз найсильніший в тілі людини (за масою)?", "a": ["Біцепс", "Жувальний", "Язик"], "correct": "Жувальний"}, {"q": "Який орган відповідає за фільтрацію крові?", "a": ["Легені", "Нирки", "Печінка"], "correct": "Нирки"}, {"q": "Хто був першим космонавтом?", "a": ["Юрій Гагарін", "Ніл Армстронг", "Базз Олдрін"], "correct": "Юрій Гагарін"}, {"q": "Скільки хребців у людини?", "a": ["33", "36", "30"], "correct": "33"}, {"q": "Скільки триватиме одна доба?", "a": ["48 годин", "12 годин", "24 години"], "correct": "24 години"}, {"q": "Який метал легший: алюміній чи свинець?", "a": ["Свинець", "Алюміній", "Олово"], "correct": "Алюміній"}, {"q": "Яка мова найбільш розповсюджена у світі?", "a": ["Англійська", "Китайська", "Іспанська"], "correct": "Англійська"}, {"q": "Що є столицею Австралії?", "a": ["Сідней", "Канберра", "Мельбурн"], "correct": "Канберра"}, {"q": "Який континент найбільший за площею?", "a": ["Азія", "Північна Америка", "Африка"], "correct": "Азія"}, {"q": "Хто написав 'Заповіт'?", "a": ["Пантелеймон Куліш", "Тарас Шевченко", "Леся Українка"], "correct": "Тарас Шевченко"}, {"q": "Яке озеро є найбільшим у світі?", "a": ["Байкал", "Каспійське", "Вікторія"], "correct": "Каспійське"}, {"q": "Який газ найбільше в атмосфері?", "a": ["Азот", "Вуглекислий газ", "Кисень"], "correct": "Азот"}, {"q": "Скільки материків на планеті?", "a": ["5", "7", "6"], "correct": "7"}, {"q": "Який український символ має форму тризуба?", "a": ["Гімн", "Герб", "Прапор"], "correct": "Герб"}, {"q": "Скільки пальців у людини на ногах?", "a": ["12", "8", "10"], "correct": "10"}, {"q": "Яка країна найбільша за площею?", "a": ["Росія", "Китай", "Канада"], "correct": "Росія"}, {"q": "Який колір має хлорофіл?", "a": ["Зелений", "Жовтий", "Червоний"], "correct": "Зелений"}, {"q": "Яка мова є державною в Бразилії?", "a": ["Іспанська", "Португальська", "Англійська"], "correct": "Португальська"}, {"q": "Яка тварина символізує мир?", "a": ["Орел", "Вовк", "Голуб"], "correct": "Голуб"}, {"q": "Скільки океанів на Землі?", "a": ["5", "4", "6"], "correct": "5"}, {"q": "Який рік був першим незалежної України?", "a": ["1991", "1990", "1992"], "correct": "1991"}, {"q": "Яка тварина є найбільш швидкою на суші?", "a": ["Кінь", "Лев", "Гепард"], "correct": "Гепард"}, {"q": "Який континент розташований на Південному полюсі?", "a": ["Австралія", "Арктика", "Антарктида"], "correct": "Антарктида"}, {"q": "Який колір має жовток яйця?", "a": ["Жовтий", "Білий", "Червоний"], "correct": "Жовтий"}, {"q": "Що з цих фруктів цитрус?", "a": ["Яблуко", "Апельсин", "Груша"], "correct": "Апельсин"}, {"q": "Яка форма має футбольний м’яч?", "a": ["Овальна", "Кубічна", "Куляста"], "correct": "Куляста"}, {"q": "Скільки місяців у році?", "a": ["12", "10", "11"], "correct": "12"}, {"q": "Яка країна першою запустила супутник?", "a": ["Китай", "СРСР", "США"], "correct": "СРСР"}, {"q": "Що виробляють бджоли?", "a": ["Мед", "Шовк", "Молоко"], "correct": "Мед"}, {"q": "Яке свято святкують 25 грудня?", "a": ["Великдень", "Новий рік", "Різдво"], "correct": "Різдво"}];

Telegram.WebApp.ready();

let selectedQuestions = [];
let current = 0;
let score = 0;
const questionTitle = document.getElementById("question-title");
const answersContainer = document.getElementById("answers");
const resultEl = document.getElementById("result");
const restartBtn = document.getElementById("restart-btn");

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function startQuiz() {
  score = 0;
  current = 0;
  resultEl.classList.add("hidden");
  restartBtn.classList.add("hidden");
  Telegram.WebApp.MainButton.hide();
  selectedQuestions = [...allQuestions];
  shuffle(selectedQuestions);
  selectedQuestions = selectedQuestions.slice(0, 10);
  showQuestion();
}

function showQuestion() {
  const q = selectedQuestions[current];
  questionTitle.textContent = `Питання ${current + 1} з 10: ${q.q}`;
  answersContainer.innerHTML = "";
  q.a.forEach(ans => {
    const btn = document.createElement("button");
    btn.textContent = ans;
    btn.onclick = () => handleAnswer(btn, ans);
    answersContainer.appendChild(btn);
  });
}

function handleAnswer(button, answer) {
  const q = selectedQuestions[current];
  const buttons = answersContainer.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === q.correct) {
      btn.style.background = "#28a745";
    } else if (btn === button) {
      btn.style.background = "#dc3545";
    }
  });
  if (answer === q.correct) score++;
  current++;
  setTimeout(() => {
    if (current < 10) {
      showQuestion();
    } else {
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  questionTitle.textContent = "Вікторина завершена!";
  answersContainer.innerHTML = "";
  resultEl.textContent = `Ваш результат: ${score} з 10`;
  resultEl.classList.remove("hidden");
  restartBtn.classList.remove("hidden");

  Telegram.WebApp.MainButton.setText("Надіслати результат").show();
  Telegram.WebApp.MainButton.onClick(() => {
    Telegram.WebApp.sendData(JSON.stringify({score: score, total: 10}));
    Telegram.WebApp.close();
  });
}

restartBtn.onclick = startQuiz;
startQuiz();
