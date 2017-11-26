// global variables
var word = "";
var easyWords = ["hello","bye", "hot", "cold", "lime", "fish", "chef", "and", "pixi", "pony"];
var mediumWords = ["babpipes", "hooligan", "cricket", "hippo", "elevator", "junkyard","gargoyle", "berkeley", "sarcasm", "python" ];
var hardWords = ["espionage", "galvanize", "zigzagging", "grogginess", "haphazard", "jiujitsu", "beekeeper", "pneumonia", "supercalifragilisticexpialidocious", "antidisestablishmentarianism"];
var numGuesses = 10;
var guessedLetters = [];


function startGame(){
    document.getElementById("error").innerHTML = "";
    var strLevel = document.getElementById("level").value;
    var level = parseInt(strLevel);
    if (level === 1){
        word = easyWords[Math.floor(Math.random() * easyWords.length)];
    }
    if (level === 2){
        word = mediumWords[Math.floor(Math.random() * mediumWords.length)];
    }
    if (level === 3){
        word = hardWords[Math.floor(Math.random() * hardWords.length)];
    }
    console.log(word);
    printWord();
}

function printWord(){
    var result = "";
    for (var i = 0; i < word.length; i++){
        if(guessedLetters.indexOf(word[i])!=-1){
            result += word[i];
        } else {
            result += " _";
        }
    }
    if (result.indexOf("_") === -1){
        return "You win! You guessed the word: " + word;
    }
    document.getElementById("print").innerHTML = result;
}

function handleGuess(){
    // makes sure you don't guess a letter before starting a game
    var letter = document.getElementById("LetterGuess").value;
    if (word.length === 0){
        document.getElementById("error").innerHTML = "Error: Start a game before you enter your guess.";
        document.getElementById("guess").value = "";
        return;
    }
    // makes sure you can't guess a letter twice
    var guess = document.getElementById("LetterGuess").value;
    if (guessedLetters.indexOf(guess) > -1){
        document.getElementById("error").innerHTML = "You've already guessed that letter. Please try again.";
        document.getElementById("LetterGuess").value = "";
        return;
    }
    // makes sure you can't guess a letter more than one
    if (letter.length!=1){
        document.getElementById("error").innerHTML = "ERROR! Please only enter one letter per guess.";
        return;
    }
    guessedLetters.push(letter);
    numGuesses -= 1;
    printWord();
    document.getElementById("showGuessedLetters").innerHTML = guessedLetters;
    document.getElementById("guessesLeft").innerHTML = numGuesses;
    document.getElementById("LetterGuess").value = "";
    if (numGuesses === 0) {
        document.getElementById("numGuesses").innerHTML = "";
        document.getElementById("guessedLetters").innerHTML = "";
        document.getElementById("print").innerHTML = "GAME OVER! Your word was: " + word;
    }

}

function reset(){

    numGuesses = 10;
    document.getElementById("LetterGuess").value = "";
    document.getElementById("print").innerHTML = "";
    document.getElementById("level").value = 1;
}