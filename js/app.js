var compNum;
var alreadyGuess = [];
$(document).ready(function(){
	newGame();
	getUserNumber();
	/*--- Display information modal box ---*/
	$(".what").click(function(){
  	$(".overlay").fadeIn(1000);

	});
	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});
	// New Game
	$('.new').click(function(){
		newGame();
	});
});


function newGame(){
	//random number 0 -100
	compNum = randomNumber(0, 100)
	compNum = +compNum
	console.log("Computer number is " + compNum);
	alreadyGuess = [];
	$('#guessList').empty();
	$("#count").text(0);
}

// total
function getTotal(a, b){
	var total = a - b;
	total = +total
	console.log('THE total is ' + total);
	return Math.abs(total);
}

function hotCold(num){

	if(num >= 50){
		return "Ice cold!";
	} else if (num >= 30){
		return "Cold!"
	} else if (num >= 10){
		return "Less cold!"
	} else if(num > 0) {
		return "Hot!"
	} else if(num == 0){
		newGame();
		return "You won!! Try Again ;)"
	}

}

function getUserNumber(){

	$('form').submit(function(e){
		userNumber = $("#userGuess").val();
		console.log(alreadyGuess.indexOf(userNumber));
		e.preventDefault();
		if(isNaN(userNumber) || (userNumber > 100 || userNumber < 1)){
			alert('You must choose a number between 1 and 100');
			$('form').find('input:text').val('');
		} else if(alreadyGuess.indexOf(userNumber) > -1){
			alert('You already guess this one!');
			$('form').find('input:text').val('');
		} else {
		

			alreadyGuess.push(userNumber);

			$('#guessList').append('<li>' + userNumber + '</li>')
	
			$('#feedback').text(hotCold(getTotal(compNum, userNumber)));
		
			$('#userGuess').val('');

			countGuess();
		}
	});
}

function randomNumber(min, max){
	return Math.round(Math.random() * (max - min) + min); //Math.round for don't get decimal and Math random between range
}

// Guess
function countGuess(){
	$("#count").html(function(){
		return $('#guessList li').size();
	});
}