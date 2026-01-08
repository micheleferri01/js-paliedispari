// # Richiesta
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
// Dichiariamo chi ha vinto.

// #Algoritmo

// chiedo all'utente 'pari o dispari?'
const userChoice = 'pari' || prompt('pari o dispari', 'pari').trim().toLocaleLowerCase();
console.log(userChoice);

// chiedo all'utente un numero tra 1 e 5
const userNumber = 1 || parseint(prompt('inserire un numero da 1 a 5', 1));
console.log(userNumber);


// valori di range per la generazione del numero per il pc
const max = 5;
const min = 1;
const pcNumber = generateRandomNumber(max,min);
console.log(pcNumber);

// #funzioni
/**
 * Questa funzione genera un numero randomico compreso nel range specificato
 * @param {number} num1 valore massimo che può essere generato
 * @param {number} num2 valore minimo che può essere generato
 * @returns {number} ritorna un numero randomico compreso nel range
 */
function generateRandomNumber(num1,num2){
    const randomNumber = Math.floor(Math.random() * (num1 - num2 + 1) + num2);
    return randomNumber
}