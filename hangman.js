const players = [
  { name: "Alisson", image: "images/alisson.jpg" },
  { name: "MacAllister", image: "images/mac-allister.jpg" },
  { name: "Szoboszlai", image: "images/Szoboszlai.jpg" },
];

window.onload = function () {
  let attemptsDisplay = document.getElementById("incercari");
  let numAttempts = 0;
  attemptsDisplay.innerHTML = `Numar Incercari: ${numAttempts}`;

  let levelIndex = Math.floor(Math.random() * 3); // Randomly selects a difficulty level
  let player = players[levelIndex];
  let word = player.name.toLowerCase(); // Convert to lowercase to standardize input handling
  let wordLength = word.length;
  let maskedWord = Array(wordLength).fill("-"); // Creates an array with '-' for each letter in the word

  let wordDisplay = document.getElementById("cuvant");
  let inputLetter = document.getElementById("litera");
  wordDisplay.innerHTML = maskedWord.join("");

  let playerImage = document.getElementById("player-photo");
  playerImage.src = player.image;

  let submitButton = document.getElementById("submit-button");
  submitButton.addEventListener("click", () => {
    let letter = inputLetter.value.toLowerCase(); // Normalize the input to lowercase
    numAttempts++;
    attemptsDisplay.innerHTML = `Numar Incercari: ${numAttempts}`;
    inputLetter.value = "";

    for (let i = 0; i < wordLength; i++) {
      if (letter === word[i]) {
        maskedWord[i] = word[i];
      }
    }
    wordDisplay.innerHTML = maskedWord.join("");
    if (maskedWord.join("") === word) {
      setTimeout(() => {
        alert(`Felicitari ai castigat din ${numAttempts} incercari!`);
        localStorage.setItem(word, numAttempts);
        location.reload();
      }, 1000);
    }
  });

  inputLetter.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      submitButton.click();
    }
  });

  const timerElement = document.getElementById("timer");

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function updateColor() {
    const currentColor = getComputedStyle(timerElement).color;
    let newColor = getRandomColor();
    while (newColor === currentColor) {
      newColor = getRandomColor();
    }
    timerElement.style.color = newColor;
  }

  // Timer initialization
  let seconds = 0;
  function startTimer() {
    setInterval(() => {
      seconds++;
      timerElement.innerHTML = `Timer: ${seconds}s`;
      updateColor();
    }, 1000);
  }

  startTimer();

  timerElement.addEventListener("click", function (event) {
    event.stopPropagation();
  });
};
