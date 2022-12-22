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

/*
BONUS:
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.
*/

/*
1. Creo nel DOM un input per il campo mail;
2. creo nel DOM un bottone a cui colleco la funzione che farò in js, che si realizzerà quando clicco sul bottone;
3. creo nel DOM un campo in cui far apparire il messagio;
4. in JS creo la funzione che mi permetterà di validare la mail inserita e capire se la mail inserita è nella lista, la testo nella console. 
Se è in lista compare il messaggio "sei in lista" altrimenti il messaggio sarà "non sei in lista" (MAILSTONE 1 già completata);
6. collegare i campi del DOM con JS;
7. occuparmi della grafica.
*/

const email = [
  "nomeUno@gmail.it",
  "nomeDue@gmail.it",
  "nomeTre@gmail.it",
  "nomeQuattro@gmail.it",
  "nomeCinque@gmail.it",
];

function myFunction() {
  // Inserimento audio al click del bottone
  var audio = document.getElementById("audio");
  audio.play();

  // Validazione della mail;
  var emailCheck =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

  const mailUtente = document.getElementById("emailId").value;
  console.log(mailUtente);

  if (mailUtente.match(emailCheck)) {
    console.log("La mail è valida");
    for (i = 0; i < email.length; i++) {
      console.log(email[i]);
    }
    if (email.includes(mailUtente)) {
      console.log("in elenco");
      document.getElementById("messaggio").innerHTML = "La mail è nell'elenco.";
    } else {
      console.log("non in elenco");
      document.getElementById("messaggio").innerHTML =
        "La mail non è nell'elenco.";
    }
  } else {
    console.log("La mail non è valida");
    document.getElementById("messaggio").innerHTML =
      "La mail non è valida, ricarica la pagina e riprova.";
  }
}
