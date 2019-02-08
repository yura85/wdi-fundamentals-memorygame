
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var checkForMath = function() {
if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	}
		else {
			alert("Sorry try again");
		}	
};

var flipCard = function (cardId)
 {
if (cardsInPlay.length === 2) {
	checkForMath();
	}
	 console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
};

flipCard(0);
flipCard(2);