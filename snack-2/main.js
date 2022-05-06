// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. 
// Ogni volta che ne crei uno, stampalo a schermo.

// 1. chiedo all'utente un numero
let number;
do {
    number = Number(prompt("Inserisci il numero di array che vuoi creare"));
} while(isNaN(number));
// 2. ciclo per N volte
for ( let i = 0; i < number; i++ ) {
// 2a. definire un array vuoto
    const arr = [];
    //2b. ciclo 10 volte
    for ( let i = 0; i < 10; i++ ) {
        // 2b-a. genero un numero casuale fra 1 e 100
        const number = Math.floor(Math.random() * 100) + 1;
        // 2c-b. inserisco questo numero nell'array creato precedentemente
        arr.push(number);
    }
    // 2c. stampo l'array
    console.log(arr);
}
