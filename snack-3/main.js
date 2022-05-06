/*---------------------------
    FUNCTIONS
----------------------------*/

/*
    restituisce vero se il numero passato per argomento è pari
    restituisce false se il numero passato per argomento è dispari
*/
function isEven(num) {
    if( num % 2 === 0 ) {
        return true;
    }
    return false;
}
/*
    restituisce un numero random in un range min e max
*/
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
/*
    restituisce una lista di numeri random
*/
function getRandomNumbersList(nElements, min, max) {
    const numbers = [];
    for(let i = 0; i < nElements; i++) {
        numbers.push(getRandomNumber(min, max));
    }
    return numbers;
}

/*---------------------------
    MAIN
----------------------------*/
// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.
// 1. creo un array di numeri
const divGreen = document.querySelector("#green");
const divRed = document.querySelector("#red");
const arrayLength = getRandomNumber(10, 30);
const numbers = getRandomNumbersList(arrayLength, 1, 100);
// 2. attraverso l'array di numeri
for(let i = 0; i < numbers.length; i++) {
    const element = document.createElement("p");
    element.innerHTML = numbers[i];
    //  2b. verico se numbers[i] l'elemento è pari o dispari
    if( isEven(numbers[i]) ) {
        //  2c. SE l'elemento è pari lo inserisco nel div #green
        divGreen.append(element);
    } else {
        // ALTRIMENTI lo in inserisco nel div #red
        divRed.append(element);
    }
}
