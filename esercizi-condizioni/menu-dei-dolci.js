/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile

  http://www.imparareaprogrammare.it
*/
var Ninput = 4
if (Ninput == 1) {
  console.log('Hai scelto il dolce "Tiramisù"');
} else if (Ninput ==2) {
  console.log('Hai scelto il dolce "Torta della Nonna"');
} else if (Ninput ==3) {
  console.log('Hai scelto il dolce "Cheesecake alla Nutella"');
} else if (Ninput ==4) {
  console.log('Hai scelto il dolce "Macedonia"');
} else {
  console.log('Dolce non disponibile');
}