/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/
var Nsec = 65
var Nore = Math.floor(Nsec/3600)
var Nminuti = Math.floor((Nsec - Nore*3600)/60)
var Nsecondi = Math.round((((Nsec-Nore*3600)/60)-Nminuti)*60)
console.log('Ore:',Nore);
console.log('Minuti:',Nminuti);
console.log('Secondi:',Nsecondi);