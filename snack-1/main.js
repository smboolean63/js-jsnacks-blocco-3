// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.
const numbers = [];
let sum = 0;

do {
    let number = Number(prompt("Inserisci un numero"));

    if( !isNaN(number) ) {
        sum += number;
        if(sum < 50) {
            numbers.push(number);
        }
    }

} while(sum < 50)

console.log(numbers);