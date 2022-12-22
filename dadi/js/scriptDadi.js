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
let dadoComputer = Math.floor(Math.random() * 6) + 1;

console.log("Dado utente", dadoUtente);
console.log("Dado computer", dadoComputer);

if (dadoUtente < dadoComputer) {
  console.log("Computer hai vinto");
} else if (dadoUtente > dadoComputer) {
  console.log("Utente hai vinto");
} else if (dadoUtente == dadoComputer) {
  console.log("Punteggio pari");
}
