var letters = ("a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guesses = [];

document.onkeyup = function(event) {
    var userChoice = event.key;

    var compChoice = letters[Math.floor(Math.random() * letters.length)];

    if (guessesLeft < 1) {
        alert("Game Over LUL");
        guessesLeft--;
        return;
        
    }
    if (userChoice === compChoice) {
        alert("Correct");
        wins++;
    } else {
        alert("Nope");
        losses++;
        guessesLeft--;
    }
    if (userChoice !== compChoice) {
        guesses.push(String(" " + userChoice));
    } else {
        guesses = [];
    }

    var html =
        "<p>You Picked: " + userChoice + "</p>" +
        "<p>I Picked: " + compChoice + "</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Guesses: " + guesses + "</p>";
    document.querySelector("#game").innerHTML = html;
};