// # Richiesta
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
// Dichiariamo chi ha vinto.

// #Algoritmo

// chiedo all'utente 'pari o dispari?'
const userChoice = 'pari' || prompt('pari o dispari', 'pari').trim().toLocaleLowerCase();

// chiedo all'utente un numero tra 1 e 5
const userNumber = parseint(prompt('inserire un numero da 1 a 5', 1));