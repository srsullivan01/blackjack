$(function(){
var playerHand = [];
var dealerHand = [];
var playerHandValue = [];
var dealerHandValue = [];
var deck = [];
var valueOfCard = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '10 J', '10 Q', '10 K', '11 A'];
var suits = ['Hearts','Diamonds','Spades','Clubs'];

$('#startButton').click(function(){
  dealNewPlayerHand();
  dealNewDealerHand();
  console.log("player hand is: " + playerHand.value);
  console.log("dealer hand is: " + dealerHand.value);
});
$("#hitButton").click(function(){
  hitButton();
});

$("#standButton").click(function(){
  standButton();
});
displayScore();

function card(name, image, suit, value){
  this.name = name;
  this.image = image;
  this.suit = suit;
  this.value = balue;
}

// Deck Setup
var GameData = {
    deck: [],
    buildDeck: function() {
        var valueOfCard = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '10 J', '10 Q', '10 K', '11 A'];
        var suits = ['Hearts','Diamonds','Spades','Clubs'];

        for( var n = 0; n < valueOfCard.length; n++ ) {
            for( var s = 0; s < suits.length; s++ ) {
                this.deck.push(valueOfCard[n] + " " + suits[s]);
                //GameData.deck.push({
                  //value: parseInt(valueOfCard[n]),
                  //suit: suits[s],
                  //player: null,
                  //image: ("images/small/" + parseInt(valueOfCard[n]) + "_" + suits[s] + ".png"),
                //});
            }
        }
      }
};
GameData.buildDeck();


function yourHand() {
  this.player='none';
  this.cards=[];
  this.value = 0;
}
function start() {
  playerHand = new yourHand();
  dealerHand = new yourHand();
  playerHand.player = 'player';
  dealerHand.player = 'dealer';
  startingHand();
  showValue();
  if( playerHand.value === 21) {
    win();
    $('.buttons').addClass('hide');
    $('#reset').removeClass('hide');
    if(deck.length < 10) {
      shuffleDeck();
    }
  }
}


// Deal a new hand to player
function dealNewPlayerHand() {
    var dealCards = GameData.deck[Math.floor(Math.random() * GameData.deck.length)];
    console.log('dealNewPlayerHand function is working');
    for (var i = 0; i <= 1; i++) {
        playerHand.push(GameData.deck[Math.floor(Math.random() * GameData.deck.length)]);
        playerHand.push(parseInt(playerHand[i]));
    }
    console.log(playerHand);
    console.log("these are the value of the cards in playerHandValue");

    return dealCards;
}

//deal to dealer
function dealNewDealerHand() {
    var dealCards = GameData.deck[Math.floor(Math.random() * GameData.deck.length)];
    console.log("dealNewDealerHand function is working");
    for (var i = 0; i <= 1; i++) {
        dealerHand.push(GameData.deck[Math.floor(Math.random() * GameData.deck.length)]);
        dealerHand.push(parseInt(dealerHand[i]));
    }
    console.log(dealerHand);
    console.log("these are the value of the cards in dealerHand");
    return dealCards;
}
//hit button for player
function hitButton() {
    var dealCards = GameData.deck[Math.floor(Math.random() * GameData.deck.length)];
        console.log("hitPlayer function is working");
        playerHand.push(dealCards);
        playerHand.push(parseInt(dealCards));

        console.log(playerHand);
        console.log("hit card is " + dealCards);
        checkScore();
}
//hit dealer
function hitDealer() {
  var dealCards = GameData.deck[Math.floor(Math.random() * GameData.deck.length)];
      console.log("hitDealer function is working");
      dealerHand.push(dealCards);
      dealerHand.push(parseInt(dealCards));

      console.log(playerHand);
      console.log("hit card is " + dealCards);
}
//score player hand
var sumPlayerHand = function(array) {
    console.log("sumPlayerHand working");
    var sumPlayer = 0;
    for (var i = 0; i < playerHand.length; i++) {

    sumPlayer = sumPlayer + array[i];

    }


    console.log("Player total is: " + sumPlayer);
};
//score dealer hand
var sumDealerHand= function(array) {
    console.log("sumDealerHand working");
    var sumDealer = 0;
    for (var i = 0; i < dealerHand.length; i++) {

    sumDealer = sumDealer + array[i];

    }

    console.log("Dealer total is: " + sumDealer);
};

//player stands
function standButton(){
  if (sumPlayerHand < 22){
    if (sumDealerHand < 17) {
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
  if(sumPlayerHand < 22) {
    if(sumPlayerHand > sumDealerHand) {
      console.log("you win");
      displayScore();
      //when you add images change this
    }
    else {
      if(sumDealerHand < 22) {
        if(sumDealerHand === sumPlayerHand) {
          console.log("its a draw");
          displayScore();
          //vhange here when adding images
        }
        else {
          console.log("you lose");
          displayScore();
          //change to append something
        }
      }
    }
    if(sumDealerHand > 21) {
      console.log("you win");
      displayScore();
      //you'll call the win function again here
    }
  }
  else{
    console.log("you lose");
    displayScore();
    //call the lose function here
  }
  displayScore();
}



//write function to generate images based on value of cards
  //see the parseInt at the begining of document for partial fill
function getImage(){
  //this gets the image
  imagePath= "images/small/" + parseInt(valueOfCard[n]) + "_" + suits[s] + ".png";
  //this appends the image to where it needs to be
  var cardFront1 = document.getElementById('cardFront1');
  img.onload = function() {
    $('#cardFront1').append("<img src=" + imagePath + "/>");
};
image.src = imagePath;
}
//sum values in playerHand object
//attach that function to hit and dealCards

//display messages in game board (you win, you lose, etc
function displayScore(){
  $("#scorebox" ).append(playerHand.value);
}

//append player's score to scorebox on board
});
