// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

/*
1. Generare un numero random per l'utente da 1 a 6;
2. generare un numero random per il computer da 1 a 6;
3. confrontare i punteggi;
4. se il pc fa il punteggio più alto vince (quindi stampa in console: vince il pc e perde l'utente), 
altrimenti perde (quindi stampa in console: vince l'utente, perder il pc);
*/

let dadoUtente = Math.floor(Math.random() * 6) + 1;
document.getElementById("youPunteggio").innerHTML = dadoUtente;
let dadoComputer = Math.floor(Math.random() * 6) + 1;

document.getElementById("computerPunteggio").innerHTML = dadoComputer;

console.log("Dado utente", dadoUtente);
console.log("Dado computer", dadoComputer);

const winner = "winner";
const looser = "looser";
const equal = "equal";

if (dadoUtente < dadoComputer) {
  console.log("Computer hai vinto");

  // const pari = "equal";
  document.getElementById("risultatoComputer").innerHTML = winner;
  document.getElementById("risultatoYou").innerHTML = looser;
} else if (dadoUtente > dadoComputer) {
  console.log("Utente hai vinto");
  document.getElementById("risultatoComputer").innerHTML = looser;
  document.getElementById("risultatoYou").innerHTML = winner;
} else if (dadoUtente == dadoComputer) {
  console.log("Punteggio pari");
  document.getElementById("risultatoComputer").innerHTML = equal;
  document.getElementById("risultatoYou").innerHTML = equal;
}
