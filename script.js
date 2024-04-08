let currentGuess;
document.addEventListener("DOMContentLoaded", () => {
  // her vi skal vælge en element hvor vi skal vise en besked.
  const messageElment = document.querySelector("#message");

  // Here vi skal tilføje en event listener til knapper.

  document.querySelector("#low").addEventListener("click", () => {
    handleLow(messageElment);
  });

  document.querySelector("#high").addEventListener("click", () => {
    handleHigh(messageElment);
  });

  document.querySelector("#correct").addEventListener("click", () => {
    handleCorrect(messageElment);
  });

  // her vi kalde på den først funktion

  generateGuess();
  displayGuess(messageElment);
});

function generateGuess() {
  currentGuess = Math.trunc(Math.random() * 100) + 1;
}

function displayGuess(messageElment) {
  // vise det nuværende gæt tal til brugen

  messageElment.textContent = `Er ${currentGuess} dit tal?`;
}

function handleLow(messageElment) {
  generateGuess();
  displayGuess(messageElment);
}
function handleHigh(messageElment) {
  generateGuess();
  displayGuess(messageElment);
}
function handleCorrect(messageElment) {
  messageElment.textContent = `Er ${currentGuess} er korrekt`;
}
