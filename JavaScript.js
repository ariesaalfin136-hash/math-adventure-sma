const questions = [
  {
    q: "Jika f(x) = 3x - 4, maka f(6) = ?",
    options: ["14", "10", "18", "8"],
    answer: 1
  },
  {
    q: "Penyelesaian dari x² - 16 = 0 adalah...",
    options: ["x = 4", "x = -4", "x = ±4", "x = 16"],
    answer: 2
  },
  {
    q: "Turunan dari f(x) = 5x² adalah...",
    options: ["10x", "5x", "x²", "25x"],
    answer: 0
  },
  {
    q: "Nilai cos 0° adalah...",
    options: ["0", "1", "-1", "0.5"],
    answer: 1
  }
];

let index = 0;
let score = 0;

const qEl = document.getElementById('question');
const aEl = document.getElementById('answers');
const scoreEl = document.getElementById('score');
const numEl = document.getElementById('number');
const nextBtn = document.getElementById('nextBtn');

function loadQuestion() {
  aEl.innerHTML = "";
  nextBtn.style.display = "none";
  qEl.textContent = questions[index].q;
  numEl.textContent = "Soal: " + (index + 1);

  questions[index].options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(i);
    aEl.appendChild(btn);
  });
}

function checkAnswer(i) {
  if (i === questions[index].answer) {
    score += 10;
    alert('🎉 Jawaban Benar!');
  } else {
    alert('❌ Jawaban Salah');
  }
  scoreEl.textContent = 'Skor: ' + score;
  nextBtn.style.display = 'block';
}

nextBtn.onclick = () => {
  index++;
  if (index < questions.length) {
    loadQuestion();
  } else {
    qEl.textContent = '🏆 Game Selesai! Skor Akhir: ' + score;
    aEl.innerHTML = '';
    nextBtn.style.display = 'none';
  }
}

loadQuestion();
