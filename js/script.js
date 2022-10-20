// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.

const age = parseInt(prompt('Inserire eta del passeggero'));
document.getElementById('age').innerHTML = age;
console.log('Eta del passeggero:' + age);

const km = parseFloat(prompt('Inserire distanza da percorrere per raggiungere la meta del passeggero'));
document.getElementById('km').innerHTML = km;
console.log('Kilometri da percorrere:' + km);

var prezzo = km * 0.24;
var prezzo = prezzo.toFixed(2);
document.getElementById('no-sconto').innerHTML = prezzo;
console.log('Prezzo senza sconti:' + prezzo);

if (age < 18 ){
    var prezzo = prezzo - (prezzo * 0.2 )
}else if (age > 65){
    var prezzo = prezzo - (prezzo * 0.4 )
    }
 var prezzo = prezzo.toFixed(2);
 document.getElementById('scontato').innerHTML = prezzo;
console.log('Prezzo con sconti (se presenti):' + prezzo)