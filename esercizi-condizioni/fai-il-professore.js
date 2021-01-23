/*
  Fai il professore
  Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
    v < 18: insufficiente
    18 <= v < 21: sufficiente
    21 <= v < 24: buono
    24 <= v < 27: distinto
    27 <= v <= 29: ottimo
    v = 30: eccellente
  Utilizza costrutto If.

  Esempio:
    Input: v = 29
    Output: Distinto

  Variante
  Realizzare una versione con il costrutto Switch-Case. In questo caso gestire anche il caso in cui il voto inserito non sia valido.

  http://www.imparareaprogrammare.it
*/
var Voto=30
switch (Confronto(Voto)) {
  case 1:
    console.log('Insufficiente');
    break;
  case 2:
     console.log('Sufficiente');
     break;
  case 3:
    console.log('Buono');
    break;
  case 4:
    console.log('Distinto');
    break;
  case 5:
    console.log('Ottimo');
    break;
  case 6:
    console.log('Eccelente');
    break;
  default:
    console.log('Valore inserito non valido');
    break;
}

function Confronto(Voto) { 
  if (Voto<18) {
    return 1
  }
  if (Voto>=18 && Voto<21) {
    return 2
  }
  if (Voto>=21 && Voto<24) {
    return 3
  }
  if (Voto>=24 && Voto<27) {
    return 4
  }
  if (Voto>=27 && Voto<29) {
    return 5
  }
  if (Voto==30) {
    return 6
  }
}