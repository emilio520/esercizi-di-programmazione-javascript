/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/
var d=new Date(), Anno_nas=1975
var Anno_cor=d.getFullYear()
console.log('Ha esattamente',Math.abs(Anno_nas-Anno_cor),'anni.');
console.log('Per arrivare a 100 gli mancano esattamente',100-Math.abs(Anno_nas-Anno_cor),'anni!!');
