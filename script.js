// global variables
var word = "";
var words = ["pixi", "bagpipes", "hooligan", "cricket", "hippo"];
var numGuesses = 10;
var guessedLetters = [];


function startGame(){
    document.getElementById("LetterGuess").value = "";
    document.getElementById("showGuessedLetters").value = "";
    document.getElementById("guessesLeft").value = "";
    document.getElementById("print").value = "";
    word = words[Math.floor(Math.random() * words.length)];
    console.log(word);
    printWord();
}

function printWord(){
    var result = "";
    for (var i = 0; i < word.length; i++){
        if(guessedLetters.indexOf(word[i])>-1){
            result += word[i];
        } else {
            result += " _";
        }
    }
    document.getElementById("print").innerHTML = result;
}

function handleGuess(){
    var letter = document.getElementById("LetterGuess").value;
    if (letter.length!=1){
        document.getElementById("error").innerHTML = "ERROR! Please only enter one letter per guess.";
        return;
    }
    guessedLetters.push(letter);
    console.log(guessedLetters);
    numGuesses --;
    printWord();
    document.getElementById("showGuessedLetters").innerHTML = guessedLetters;
    document.getElementById("guessesLeft").innerHTML = numGuesses;
    document.getElementById("LetterGuess").value = "";

}

