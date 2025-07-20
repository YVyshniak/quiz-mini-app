Telegram.WebApp.ready();

const correctAnswer = "Ганс Ліпперсгей";
const resultEl = document.getElementById("result");
const buttons = document.querySelectorAll("#answers button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const userAnswer = btn.dataset.answer;

    if (userAnswer === correctAnswer) {
      resultEl.textContent = "✅ Правильно!";
      resultEl.style.color = "green";
    } else {
      resultEl.textContent = `❌ Неправильно! Правильна відповідь: ${correctAnswer}`;
      resultEl.style.color = "red";
    }

    resultEl.classList.remove("hidden");
    Telegram.WebApp.MainButton.setText("Надіслати результат").show();

    Telegram.WebApp.MainButton.onClick(() => {
      Telegram.WebApp.sendData(JSON.stringify({
        answer: userAnswer,
        correct: userAnswer === correctAnswer
      }));
      Telegram.WebApp.close();
    });

    buttons.forEach(b => b.disabled = true);
  });
});
