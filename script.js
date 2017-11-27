// global variables
var word = "";
var easyWords = ["hello","bye", "hot", "cold", "lime", "fish", "chef", "and", "pixi", "pony"];
var mediumWords = ["babpipes", "hooligan", "cricket", "hippo", "elevator", "junkyard","gargoyle", "berkeley", "sarcasm", "python" ];
var hardWords = ["espionage", "galvanize", "zigzagging", "grogginess", "haphazard", "jiujitsu", "beekeeper", "pneumonia", "supercalifragilisticexpialidocious", "antidisestablishmentarianism"];
var numGuesses = 10;
var guessedLetters = [];
var letter = "";
var alph= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function startGame(){
    document.getElementById("error").innerHTML = "";
    document.getElementById("image").innerHTML = "<img src= img/one.png>";
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
        if(guessedLetters.indexOf(word[i]) > -1){
            result += word[i];
        } else {
            result += " _";
        }
    }
    if(word.indexOf(letter) == -1){
        numGuesses -= 1;
    }
    document.getElementById("print").innerHTML = result;
    if(result.indexOf("_") == -1){
        console.log("you win");
        document.getElementById("print").innerHTML = "You win! The word was: " + word;
    }
    if (numGuesses === 0) {
        document.getElementById("print").innerHTML = "GAME OVER! Your word was: " + word;
    }
}

function handleGuess(){
    // makes sure you don't guess a letter before starting a game
    letter = document.getElementById("LetterGuess").value.toLowerCase();
    if (word.length === 0){
        document.getElementById("error").innerHTML = "ERROR! Start a game before you enter your guess.";
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
    // makes sure it's not a number
    if (alph.indexOf(letter)== -1){
        document.getElementById("error").innerHTML = "ERROR! Please try again and enter only one letter. No numbers!"
    }
    guessedLetters.push(letter);
    printWord();
    document.getElementById("showGuessedLetters").innerHTML = guessedLetters;
    document.getElementById("guessesLeft").innerHTML = numGuesses;
    document.getElementById("LetterGuess").value = "";
    document.getElementById("image").innerHTML = "<img src= 'img/" + getImage() + ".png'>";
}


function getImage() {
    if (numGuesses === 10) {
        return "one";
    }
    if (numGuesses === 9) {
        return "two";
    }
    if (numGuesses === 8) {
        return "three";
    }
    if (numGuesses === 7) {
        return "four";
    }
    if (numGuesses === 6) {
        return "five";
    }
    if (numGuesses === 5) {
        return "six";
    }
    if (numGuesses === 4) {
        return "seven";
    }
    if (numGuesses === 3) {
        return "eight";
    }
    if (numGuesses === 2) {
        return "nine";
    }
    if (numGuesses === 1) {
        return "ten";
    }
}




function reset(){
    guessedLetters = [];
    numGuesses = 10;
    document.getElementById("guessesLeft").innerHTML = "";
    document.getElementById("showGuessedLetters").innerHTML = "";
    document.getElementById("LetterGuess").value = "";
    document.getElementById("print").innerHTML = "";
    document.getElementById("level").value = 1;
}