$(function(){
var playerHand = [];
var dealerHand = [];
var playerHandValue = [];
var dealerHandValue = [];

$('#startButton').click(function(){
  dealNewPlayerHand();
  dealNewDealerHand();
  console.log("player hand is: " + playerHand);
  console.log("dealer hand is: " + dealerHand);
  winLose();
});
$("#hitButton").click(function(){
  hitButton();
  winLose();
});
$("#standButton").click(function(){
  standButton();
  winLose();
});

// Deck Setup
var GameData = {
    deck: [],
    buildDeck: function() {
        var names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '10 J', '10 Q', '10 K', '11 A'];
        var suits = ['Hearts','Diamonds','Spades','Clubs'];

        for( var n = 0; n < names.length; n++ ) {
            for( var s = 0; s < suits.length; s++ ) {
                this.deck.push(names[n] + " " + suits[s]);
                //GameData.deck.push({
                  //value: praseInt(names[n]),
                  //suit: suits[s],
                  //player: null,
                  //image: null,
                //});
            }
        }


    }
};
GameData.buildDeck();



// Deal a new hand
function dealNewPlayerHand() {
    var dealCards = GameData.deck[Math.floor(Math.random() * GameData.deck.length)];
    console.log('dealNewPlayerHand function is working');
    for (var i = 0; i <= 1; i++) {
        playerHand.push(GameData.deck[Math.floor(Math.random() * GameData.deck.length)]);
        playerHandValue.push(parseInt(playerHand[i]));
    }
    console.log(playerHandValue);
    console.log("these are the value of the cards in playerHandValue");
    return dealCards;
}

function dealNewDealerHand() {
    var dealCards = GameData.deck[Math.floor(Math.random() * GameData.deck.length)];
    console.log("dealNewDealerHand function is working");
    for (var i = 0; i <= 1; i++) {
        dealerHand.push(GameData.deck[Math.floor(Math.random() * GameData.deck.length)]);
        dealerHandValue.push(parseInt(dealerHand[i]));
    }
    console.log(dealerHandValue);
    console.log("these are the value of the cards in dealerHandValue");
    return dealCards;
}

function hitButton() {
    var dealCards = GameData.deck[Math.floor(Math.random() * GameData.deck.length)];
        console.log("hitPlayer function is working");
        playerHand.push(dealCards);
        playerHandValue.push(parseInt(dealCards));

        console.log(playerHandValue);
        console.log("hit card is " + dealCards);
}

function hitDealer() {
  var dealCards = GameData.deck[Math.floor(Math.random() * GameData.deck.length)];
      console.log("hitDealer function is working");
      dealerHand.push(dealCards);
      dealerHandValue.push(parseInt(dealCards));

      console.log(playerHandValue);
      console.log("hit card is " + dealCards);
}
function sumPlayerHandValue(array) {
    console.log("sumPlayerHandValue working");
    var sumPlayer = 0;
    for (var i = 0; i < playerHandValue.length; i++) {

    sumPlayer = sumPlayer + array[i];

    }


    console.log("Player total is: " + sumPlayer);
}
function sumDealerHandValue(array) {
    console.log("sumDealerHandValue working");
    var sumDealer = 0;
    for (var i = 0; i < dealerHandValue.length; i++) {

    sumDealer = sumDealer + array[i];

    }

    console.log("Dealer total is: " + sumDealer);
}

function standButton(){
    //hit dealer until dealer score is < 17
    while (sumDealerHandValue < 17) {
      hitDealer();
      console.log(dealerHandValue);
    }
}
function winLose(){
  if ((dealerHandValue > 17) && (dealerHandValue < 21)) {
    console.log("You lose");
  } else if ((playerHandValue > 17) && (playerHandValue < 21)){
    console.log("You win");
  } if (playerHandValue === 11){
    console.log("you win");
  }
}
});
