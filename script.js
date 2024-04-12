let min = 1;
let max = 100;
let currentGuess;

document.addEventListener("DOMContentLoaded", () => {
  const messageElement = document.querySelector("message");

  document.querySelector("low").addEventListener("clikc", () => {
    // here vi skal lave en funktion som skal håndtere når en funktion er
    // lave
  });

  document.querySelector("high").addEventListener("click", () => {
    // her vi skal lave den funktion som skal håndtere den som højt funktion
  });

  document.querySelector("correct").addEventListener("clcik",()=>{
   // her vi skal lave den anden funktion som vi skal for at håndtere en 
   // korrekt funktion  
  });
});

// her vi skal lave disse funktion som skal være ansvarlig at håndtere ting 

  // den funktion den ansvalige for at genret vores gæt 
  function genretGuess(){
    // Vi skal opdatæer vores gæt til at være midpunkt mellem min og max 
    currentGuess=Math.trunc((min+max)/2);
  }

