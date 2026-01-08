// #Richiesta
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// chiedo una parola all'utente
const word = prompt('Inserire una parola', 'alla').trim().toLowerCase();
console.log(word);

// Invoco la funzione e salvo il risulttato
let wordIsPalindroma = isWordPalindroma(word);
console.log(wordIsPalindroma);

// messaggio per l'utente
const message = wordIsPalindroma ? 'La parola inserita è palindroma.' : 'La parola inserita non è palidroma.';
alert(message);


// Dichiaro la funzione per controllare se la parola inserita è palidroma
/**
 * Questa funzione controlla se text è una parola palidroma
 * @param { string } text stringa da controllare
 * @returns { boolean } ritorna 'true' se la stringa è palindroma
*/
function isWordPalindroma(text) {
    // dichiaro una variabile dove salvare la parola invertita
    let reversedWord = "";

    // inverto la parola fornita e la salvo
    for (let i = 0; i < text.length; i++) {
        const currentChar = text[i];
        reversedWord = currentChar + reversedWord;
    }

    // controllo se la parola è palindroma
    const wordPalindroma = text === reversedWord;

    // restituisco il risultato
    return wordPalindroma;
}