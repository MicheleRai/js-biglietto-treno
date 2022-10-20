// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.

const age = parseInt(prompt('Inserire eta del passeggero'));
console.log('eta del passeggero:' + age);

const km = parseFloat(prompt('Inserire distanza da percorrere per raggiungere la meta del passeggero'));
console.log('kilometri da percorrere:' + km);

var prezzo = km * 0.24;
var prezzo = prezzo.toFixed(2);
console.log('prezzo senza sconti:' + prezzo);

if (age < 18 ){
    var prezzo = prezzo - (prezzo * 0.2 )
}else if (age > 65){
    var prezzo = prezzo - (prezzo * 0.4 )
    }
 var prezzo = prezzo.toFixed(2);
console.log('prezzo con sconti (se presenti)' + prezzo)