// Mail
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.

/*
1. Crea una lista di mail con un Array;
2. chiedi la mail all'utente tramite prompt;
3. Valida la mail;
4. controlla che la mail inserita sia dentro la lista di mail che si trovano dentro l'array; usa if/else e ciclo;
5. se la mail è nell'elenco stampa il messaggio "La tua mail è nell'elenco, puoi accedere.";
*/

const email = [
  "nomeUno@gmail.it",
  "nomeDue@gmail.it",
  "nomeTre@gmail.it",
  "nomeQuattro@gmail.it",
  "nomeCinque@gmail.it",
];

const mailUtente = prompt("Ciao Utente, inserisci la tua email per favore:");
console.log(mailUtente);

// Validazione della mail;
var emailCheck =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

if (mailUtente.match(emailCheck)) {
  console.log("La mail è valida");
  for (i = 0; i < 5; i++) {
    console.log(email[i]);
  }
  if ((email[i] = mailUtente)) {
    console.log("La mail è presente");
  } else {
    console.log("La mail non è presente");
    alert("La mail non è presente.");
  }
} else {
  alert("La mail non è valida, aggiornare la pagina e riprovare.");
  console.log("La mail non è valida");
}
