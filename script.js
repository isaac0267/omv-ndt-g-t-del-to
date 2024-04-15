let min = 1;
let max = 100;
let currentGuess;

document.addEventListener("DOMContentLoaded", () => {
    const messageElement = document.querySelector("#message");

    document.querySelector("#low").addEventListener("click", () => {
        handleLow(messageElement);
    });

    document.querySelector("#high").addEventListener("click", () => {
        handleHigh(messageElement);
    });

    document.querySelector("#correct").addEventListener("click", () => {
        handleCorrect(messageElement);
    });

    generateGuess();
    displayGuess(messageElement);
});

function generateGuess() {
    currentGuess = Math.trunc((min + max) / 2);
}

function displayGuess(messageElement){
    if(min === max){
        messageElement.textContent = `${currentGuess} er den eneste mulighed. Spillet er slut.`;
    } else {
        messageElement.textContent = `Er ${currentGuess} dit gæt?`;
    }
}

function handleLow(messageElement){
    min = currentGuess + 1;
    checkGameOver();
    generateGuess();
    displayGuess(messageElement);
}

function handleHigh(messageElement){
    max = currentGuess - 1;
    checkGameOver();
    generateGuess();
    displayGuess(messageElement);
}

function handleCorrect(messageElement){
    messageElement.textContent = `${currentGuess} er korrekt. Tillykke!`;
}

function checkGameOver(){
    if(min > max){
        alert("Ingen mulighed er tilbage, spillet er slut.");
        document.querySelector("#low").disabled = true;
        document.querySelector("#high").disabled = true;
        document.querySelector("#correct").disabled = true;
    }
}
