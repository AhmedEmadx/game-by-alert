//to use prompt
var name = prompt("whats your name?");
alert("Hello " + name);
//to use boolean if you click okay true returned.
var likeCats = confirm("do you like word?");
	if (likeCats) {
		alert("you are so good");
	} else {
		alert("opss! put here you can have a nice time");
	}

//firest line of game
var words = ["amazing", "monkey", "pancake", "thanks"];
var word = words[Math.floor(Math.random() * words.length)];
//answer array to much the number of letter in word
var answerArray = [];
for (var i = 0; i < word.length; i++) {
	answerArray[i] = "_";
}
var remainingLetters = word.length;
//showing the player progress
while (remainingLetters > 0){
	alert(answerArray.join(" "));
	var guess = prompt("Guess a letter, or click cancel to stop playing.\nwright lower case");
	if (guess === null) {
		break;
	}
	else if (guess.length !== 1) {
		alert("please enter a single letter.");
	}
	else {
		//update the game state with the guess
		for (var y = 0; y < word.length; y++) {
			if (word[y] === guess) {
				answerArray[y] = guess;
				remainingLetters--;
			}
		}
	}		
}
alert("good job! the answer was " + word);
