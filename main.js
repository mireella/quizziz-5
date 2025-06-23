const questions = [
  { 
    text: "A diversidade cultural deve ser protegida e promovida em todas as sociedades.",
    category: "cultural"
  },
  { 
    text: "As mudanças climáticas são causadas principalmente por atividades humanas.",
    category: "ambiental"
  },
  { 
    text: "A desigualdade social é um dos principais desafios do século XXI.",
    category: "social"
  },
  { 
    text: "É importante valorizar e preservar os conhecimentos indígenas.",
    category: "cultural"
  },
  { 
    text: "O consumo consciente pode ajudar a preservar os recursos naturais.",
    category: "ambiental"
  },
];

let current = 0;
const answers = [];

function showQuestion() {
  if (current >= questions.length) {
    showResult();
    return;
  }

  const q = questions[current];
  const quizDiv = document.getElementById("quiz");
  quizDiv.innerHTML = `
    <div class="question">
      <h2>Pergunta ${current + 1}</h2>
      <p>${q.text}</p>
      <div class="answers">
        <button onclick="answer(true)">Concordo</button>
        <button onclick="answer(false)">Discordo</button>
      </div>
    </div>
  `;
}

function answer(userChoice) {
  answers.push({ ...questions[current], userChoice });
  current++;
  showQuestion();
}

function showResult() {
  const resultDiv = document.getElementById("result");
  document.getElementById("quiz").style.display = "none";

  const count = {
    cultural: 0,
    ambiental: 0,
    social: 0,
  };

  answers.forEach(ans => {
    if (ans.userChoice) count[ans.category]++;
  });

  let summary = "<h2>Resumo das suas escolhas:</h2>";

  if (count.cultural >= 2) {

   summary += "<p>Você demonstra grande valorização pela cultura e diversidade.</p>";
  }
  if (count.ambiental >= 2) {
    summary += "<p>Sua consciência ambiental é evidente em suas respostas.</p>";
  }
  if (count.social >= 1) {
    summary += "<p>Você reconhece a importância das questões sociais.</p>";
  }
  if (count.cultural + count.ambiental + count.social === 0) {
    summary += "<p>Você parece cético ou crítico em relação às questões sociais, culturais e ambientais.</p>";
  }

  resultDiv.innerHTML = summary;
  resultDiv.style.display = "block";
}

showQuestion();

