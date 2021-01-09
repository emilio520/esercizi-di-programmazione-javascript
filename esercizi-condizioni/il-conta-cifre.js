/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/
var Ninput = 9
if (Ninput.toString().length <=4) {
  console.log('Il numero è formato da',Ninput.toString().length,'cifre');
} else {
  console.log('Numero composto da più di 4 cifre');
}
