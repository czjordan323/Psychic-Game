var winCount = 1;
var lossesCount =  0;
var guessesRemaining = 9;
var failedAttempts = [];
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
,"r","s","t","u","v","w","x","y","z"];


// computer pick
var randomPick = Math.floor(Math.random() * letters.length);
var computerPick = letters[randomPick];

console.log(computerPick);


document.onkeyup = function(event) {
    var userPick = event.key;

    var regex = /[a-z]/gi;
        if (!regex.test(userPick)) {
            alert("Please Choose a Letter")
        }
        else {
            console.log(userPick);
        }
}