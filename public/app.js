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
});
$("#hitButton").click(function(){
  hitButton();
});

$("#standButton").click(function(){
  standButton();
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



// Deal a new hand to player
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
//deal to dealer
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
//hit button for player
function hitButton() {
    var dealCards = GameData.deck[Math.floor(Math.random() * GameData.deck.length)];
        console.log("hitPlayer function is working");
        playerHand.push(dealCards);
        playerHandValue.push(parseInt(dealCards));

        console.log(playerHandValue);
        console.log("hit card is " + dealCards);
        checkScore();
}
//hit dealer
function hitDealer() {
  var dealCards = GameData.deck[Math.floor(Math.random() * GameData.deck.length)];
      console.log("hitDealer function is working");
      dealerHand.push(dealCards);
      dealerHandValue.push(parseInt(dealCards));

      console.log(playerHandValue);
      console.log("hit card is " + dealCards);
}
//score player hand
var sumPlayerHandValue = function(array) {
    console.log("sumPlayerHandValue working");
    var sumPlayer = 0;
    for (var i = 0; i < playerHandValue.length; i++) {

    sumPlayer = sumPlayer + array[i];

    }


    console.log("Player total is: " + sumPlayer);
};
//score dealer hand
var sumDealerHandValue= function(array) {
    console.log("sumDealerHandValue working");
    var sumDealer = 0;
    for (var i = 0; i < dealerHandValue.length; i++) {

    sumDealer = sumDealer + array[i];

    }

    console.log("Dealer total is: " + sumDealer);
};

//player stands
function standButton(){
  if (sumPlayerHandValue < 22){
    if (sumDealerHandValue < 17) {
      hitDealer();
    }
    else {
      checkScore();
    }
}
  else {
    checkScore();
  }
}
//evaluate win or loss conditions
function checkScore() {
  if(sumPlayerHandValue < 22) {
    if(sumPlayerHandValue > sumDealerHandValue) {
      console.log("you win");
      //when you add images change this
    }
    else {
      if(sumDealerHandValue < 22) {
        if(sumDealerHandValue === sumPlayerHandValue) {
          console.log("its a draw");
          //vhange here when adding images
        }
        else {
          console.log("you lose");
          //change to append something
        }
      }
    }
    if(sumDealerHandValue > 21) {
      console.log("you win");
      //you'll call the win function again here
    }
  }
  else{
    console.log("you lose");
    //call the lose function here
  }
}
});
//need to console log or otherwise show total of dealer and playerHand
//need to evaluate dealer and player total and see which is higher
