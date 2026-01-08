// #Richiesta
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// chiedo una parola all'utente
const word = prompt('Inserire una parola', 'alla').trim().toLowerCase();
console.log(word);



// Dichiaro la funzione per controllare se la parola inserita è palidroma
function isWordPalindroma(text) {
    // dichiaro una variabile dove salvare la parola invertita
    let reversedWord = "";
    
    // inverto la parola fornita e la salvo nella variabile
    for(let i = 0; i < text.length; i++){
        const currentChar = text[i];
        reversedWord = currentChar + reversedWord;
    }

    // controllo se la parola è palindroma
    const wordPalindroma = text === reversedWord;

    // restituisco il risultato
    return wordPalindroma;
}