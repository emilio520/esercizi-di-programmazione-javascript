/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()

  http://www.imparareaprogrammare.it
*/
var Player1 = 5, Player2 = 50
var Nrandom = Math.trunc(Math.random()*(100-1)+1)
console.log('Numero Random :',Nrandom);
if (Math.abs(Nrandom-Player1)>Math.abs(Nrandom-Player2)) {
  console.log('Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più!');
} else if (Math.abs(Nrandom-Player1)<Math.abs(Nrandom-Player2)) {
  console.log('Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!');
} else if (Math.abs(Nrandom-Player1)==Math.abs(Nrandom-Player2)) {
  console.log('Il giocatore 1 e il giocatore 2 hanno giocato lo stesso numero');
} else if (Math.abs(Nrandom-Player1)=0) {
  console.log('il giocatore 1 ha indovinato il numero');
} else if (Math.abs(Nrandom-Player2)=0) {
  console.log('il giocatore 2 ha indovinato il numero');
}