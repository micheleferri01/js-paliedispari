// # Richiesta
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
// Dichiariamo chi ha vinto.

// #Algoritmo

// chiedo all'utente 'pari o dispari?'
const userChoice = prompt('pari o dispari', 'pari').trim().toLocaleLowerCase();
console.log(userChoice);

// chiedo all'utente un numero tra 1 e 5
const userNumber = parseInt(prompt('inserire un numero da 1 a 5', '1'));
console.log(userNumber);


// valori di range per la generazione del numero per il pc
const max = 5;
const min = 1;
const pcNumber = generateRandomNumber(max,min);
console.log(pcNumber);

// sommo i due numeri
const sum = userNumber + pcNumber;
const isSumEven = isNumEven(sum);

const hasUserWon = userWon(userChoice,isSumEven);
const winner = hasUserWon? 'Congraturazioni! Hai vinto!' : 'Hai perso!....Riprova';
alert(winner);

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

/**
 * Questa funzione controlla se un numero è pari
 * @param {number} num numero da controllare
 * @returns {boolean} ritorna 'true' se il numero è pari
 */
function isNumEven(num){
    const numEven = num % 2 === 0;
    return numEven
}

/**
 * Questa funzione controlla se il giocatore ha vinto
 * @param {string} playerchoice scelta del giocatore 'pari o dispari'
 * @param {boolean} sumGameEven risultato del controllo che verifica se la somma dei numeri è pari
 * @returns {boolean} ritorna se il giocatore ha vinto
 */
function userWon(playerchoice,sumGameEven){
    const isPlayerChoiceEven = playerchoice === 'pari';
    const isPlayerChoiceOdd = playerchoice === 'dispari';
    const gameSumEven = sumGameEven;
    const firstCondition = isPlayerChoiceEven && gameSumEven;
    const secondCondition = isPlayerChoiceOdd && !gameSumEven;
    const playerWon = firstCondition || secondCondition;
    return playerWon
}