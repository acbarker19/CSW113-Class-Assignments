var gRandomNum;

function makeRandomNum(){
	gRandomNum = Math.floor((Math.random() * 10) + 1);
	alert("gRandomNum is " + gRandomNum);
}

function numberGuess() {
  //var randomNumber = Math.floor((Math.random() * 10) + 1);
  var yourGuess = document.getElementById("guess");

  if (yourGuess.value == gRandomNum) {
	document.getElementById("prompt").innerHTML = "That is correct!";
  } else if (yourGuess.value < gRandomNum) {
	document.getElementById("prompt").innerHTML = "Sorry, your guess was too low.";
  } else if (yourGuess.value > gRandomNum) {
	document.getElementById("prompt").innerHTML = "Sorry, your guess was too high.";
  }

}