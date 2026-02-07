const quoteText = document.getElementById("quoteText");
const moodSelect = document.getElementById("mood");

/* Quotes based on mood */
const quotes = {
  happy: [
    "Keep smiling, your positive energy is powerful.",
    "Happiness fuels success. Keep going!",
    "Your joy is your strength."
  ],
  tired: [
    "Rest if you must, but don’t quit.",
    "Small steps still move you forward.",
    "Even slow progress is progress."
  ],
  stressed: [
    "Breathe. You are doing better than you think.",
    "One task at a time. You’ve got this.",
    "Pressure makes diamonds."
  ],
  sad: [
    "This moment will pass. Stay strong.",
    "Your efforts matter, even on hard days.",
    "You are not alone in this journey."
  ],
  motivated: [
    "Stay focused. Great things are coming.",
    "Your discipline today builds your future.",
    "Consistency beats talent."
  ],
  default: [
    "Success is the sum of small efforts repeated daily.",
    "Believe in yourself and keep learning.",
    "Every day is a new opportunity to grow."
  ]
};

/* Load mood + quote on page load */
window.onload = function () {
  const savedMood = localStorage.getItem("studentMood");

  if (savedMood && quotes[savedMood]) {
    moodSelect.value = savedMood;
    showRandomQuote(savedMood);
  } else {
    showRandomQuote("default");
  }
};

/* Save mood */
function saveMood() {
  const mood = moodSelect.value;
  localStorage.setItem("studentMood", mood);
  showRandomQuote(mood);
}

/* Show random quote */
function showRandomQuote(mood) {
  const moodQuotes = quotes[mood] || quotes.default;
  const randomIndex = Math.floor(Math.random() * moodQuotes.length);
  quoteText.innerText = `"${moodQuotes[randomIndex]}"`;
}
/*mood history*/
function updateMoodHistory(mood) {
  let history = JSON.parse(localStorage.getItem("moodHistory")) || [];
  history.push(mood);

  if (history.length > 5) history.shift();
  localStorage.setItem("moodHistory", JSON.stringify(history));

  renderMoodGraph(history);
}

function renderMoodGraph(history) {
  const graph = document.getElementById("moodGraph");
  graph.innerHTML = "";

  history.forEach(mood => {
    const bar = document.createElement("div");
    bar.className = "mood-bar";
    bar.style.height = getMoodHeight(mood);
    bar.title = mood;
    graph.appendChild(bar);
  });
}

function getMoodHeight(mood) {
  const heights = {
    happy: "100%",
    motivated: "90%",
    tired: "60%",
    stressed: "50%",
    sad: "40%"
  };
  return heights[mood] || "30%";
}

/*save mood*/
function saveMood() {
  const mood = moodSelect.value;
  localStorage.setItem("studentMood", mood);
  showRandomQuote(mood);
  updateMoodHistory(mood);
}
