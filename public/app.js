$(function(){
var playerHand = [];
var dealerHand = [];
var playerHandValue = [];
var dealerHandValue = [];


// Deck Setup
var GameData = {
    deck: [],
    buildDeck: function() {
        var names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '10 J', '10 Q', '10 K', '11 A'];
        var suits = ['Hearts','Diamonds','Spades','Clubs'];

        for( var n = 0; n < names.length; n++ ) {
            for( var s = 0; s < suits.length; s++ ) {
                this.deck.push(names[n] + " " + suits[s]);
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
$('#startButton').click(function(){

  dealNewPlayerHand();
  dealNewDealerHand();
  console.log("player hand is: " + playerHand);
  console.log("dealer hand is: " + dealerHand);
});

$("#hitButton").click(function(){
  hitButton();
});
function hitButton() {
    var dealCards = GameData.deck[Math.floor(Math.random() * GameData.deck.length)];
        console.log("hitPlayer function is working");
        playerHand.push(dealCards);
        playerHandValue.push(parseInt(dealCards));

        console.log(playerHandValue);
        console.log("hit card is " + dealCards);
}

function stand(){
  //hit dealer until dealer score is < 17
  if ((dealerHandValue > 17) && (dealerHandValue < 21)) {
    console.log("You lose");
  } else if ((playerHandValue > 17) && (playerHandValue < 21)){
    console.log("You win");
  } else {
    console.log("Current score is " + playerHandValue);
  }
}
$("#standButton").click(function(){
  stand();
});

function win(){
  if ((playerHandValue > 17) && (playerHandValue < 21)) {
    console.log("you win");
  }
  if (playerHandValue === 11){
    console.log("you win");
  }
}
});








/*
var suites = ["clubs", "spades", "diamonds", "hearts"];
var value = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "King", "Queen", "Jack"];
var deck = [];
var card = [];

$(document).ready(function(){
    $('#startButton').click(function(){
       start();
       shuffle();
       createPlayer();
       dealCards();
       makeUI();
       renderCard();
       getCardUI();
    });
    $('#hitButton').click(function(){
      hit();
    });
    $('#standButton').click(function(){
      stand();
    });


//build a deck
//tried one big array, doesn't work that well, make arrays for suites + values then push to a deck

//assemble arrays and push to deck
  //make sure face card values are being assessed
function start(){
  deck = [];
  for (var i = 0; i < value.length; i++)
  {
    for (var h = 0; h <suites.length; h++)
    {
      var weight = parseInt(value[i]);
               if (value[i] == "Jack" || value[i] == "Queen" || value[i] == "King")
                   weight = 10;
               if (value[i] == "Ace")
                   weight = 11;
               var card = { Value: value[i], Suit: suites[h], Weight: weight };
               deck.push(card);
               console.log("you've got a deck");
               console.log(deck);
             }
           }
         }
   var shuffle = function(){
    for (var i = 0; i < 1000; i++)
    //shuffling 1000 times for max randomization. could easily have used any number over 52
    {
      var card1 = Math.floor((Math.random() * deck.length));
      var card2 = Math.floor((Math.random() * deck.length));
      var temporary = deck[card1];

      deck[card1] = deck[card2];
      deck[card2] = temporary;
      console.log("the deck has been shuffled");
    }
  };


var players = [];

function createPlayer(num){
    var players = [];
    for (var i = 0; i <= num; i++){
      var hand = [];
      player = [ {Name: 'Player ' + i, ID: i, Points: 0, Hand: hand} ];
              playerHand.push(player);

    }
      console.log("player created");
  }

function dealCards() {
    for(var i = 0; i < 2; i++)
    {
        for (var j = 0; j < players.length; j++)
        {
            var card = deck.pop();
            players[j].playerHand.push(card);
            renderCard(card, j);
            updatePoints();
        }
        console.log(playerHand);
    }
  // //var updateDeck = function
      //GIVEN: player hand exists - and it does
      //this should remove the cards that are in the player hand from the deck and reduce deck count by that many cards
      //if (object exists in player hand) then (remove it from deck
      //thats happening anyway
      //can i edit this out
      console.log("deck updated");
  }
}
);

    function makeUI() {
    {
       document.getElementById('players').innerHTML = '';
       for(var i = 0; i < players.length; i++)
       {
           var div_player = document.createElement('div');
           var div_playerid = document.createElement('div');
           var div_playerHand = document.createElement('div');
           var div_points = document.createElement('div');

           div_points.className = 'points';
           div_points.id = 'points_' + i;
           div_player.id = 'player_' + i;
           div_player.className = 'player';
           div_hand.id = 'hand_' + i;

           div_playerid.innerHTML = players[i].ID;
           div_player.appendChild(div_playerid);
           div_player.appendChild(div_hand);
           div_player.appendChild(div_points);
           document.getElementById('players').appendChild(div_player);
       }
       console.log("UI set up");
    }
}



function renderCard(card, player){
        var hand = document.getElementById('hand_' + player);
        playerHand.appendChild(getCardUI(card));
    }

function getCardUI(card){
        console.log("You called getCardUI function");
        var el = document.createElement('div');
        console.log(card);
        console.log(el);
        elClassName = 'card';
        console.log(elClassName);
        el.className = elClassName;
        elInner = card.Suites + ' ' + card.Value;
        console.log(elInner);
        el.innerHTML = card.Suites + ' ' + card.Value;
        console.log(playerHand[0].suites);
        return el;
    }


//shfufle the deck you just made
  //make two positions and then move cards based on those


//deal cards to player
//first create a player space the cards can be dealt to


//design how user interacts




//NOW deal the cards
  //loop through cards, remove first card from deck
  //push card to the player hand array
  //do this twice


//render cards
  //create a div for the card then display card info there
  //come back and add images when youre done writing functions and logic




//Hit button
var currentPlayer = 0;
function hit(){
  //take a card from deck and pop to player
  var card = deck.pop();
    playerHand.push(card);
    //what is the hand thats being used here
    renderCard(card, currentPlayer);
    updatePoints();
    checkScore();
    console.log("hit button is working");
}

//check to see if player's score is over 21
function checkScore() {
  if(players[currentPlayer].Points > 21) {
    document.getElementById('status').innerHTML = 'You lose.';
    console.log("checkScore is running");
  }
}

//write stay function
  //find current player, remove them from 'active' and make next player active.
  //once that has been done, check score and end game if player's score is in the right range
function stand(){
  if(currentPlayer != players.length - 1){
    document.getElementById('player ' + currentPlayer).classList.remove('active');
    currentPlayer += 1;
    document.getElementById('player ' + currentPlayer).classList.add('active');
  }
  else {
    stop();
  }
  console.log("srtay function is working");
}
//compare player scores by looping through
function stop(){
  var win = -1;
  var lose = 0;

  for (var i = 0; i < players.length; i++){
    //check that score is less than 22 and greater than other players score
    if(player[i].Points > score && player[i].Points < 22) {
      win = i;
    }
    score = players[i].Points;
  }
  document.getElementById('status').innerHTML = "Winner: Player " + players[winner].ID;
  console.log("stop function is working");
}

/check to see if player's score is over 21
function checkScore() {
  if(players[currentPlayer].Points > 21) {
    document.getElementById('status').innerHTML = 'You lose.';
    console.log("checkScore is running");
  }


//issues:
  //nothing happens when i click restart--SOLVED
  //there isnt a start fiunction
  //everything is tied to some othr function so nothing is happening
  //hit function doesnt
*/
