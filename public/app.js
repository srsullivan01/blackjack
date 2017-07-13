//deal cards to player
var deal = function() {
  var card = Math.floor((Math.random() * 52) + 1);
  console.log("deal is running");
  return card;
};

var card1 = deal();
var card2 = deal();

//convert the dealt cards to values that make sense within this context
var getValue = function(card) {
  if(card % 13 === 0 || card % 13 === 11 || card % 13 === 12) {
        return 10;
    }
    else if (card % 13 === 1) {
    return 11;
}
    else {
        return card % 13;
    }
};

//score what player has been dealt
var score = function(){
  console.log("score is running");
    return (getValue(card1) + getValue(card2));
};
console.log("You have cards " + card1 + " and " + card2 +
        " for a score of " + score());


var cardArray = [
  {
    value: 1,
    suite: "clubs",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_ca.png,
  },
  {
    value: 2,
    suite: "clubs",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_c2.png,
  },
  {
    value: 3,
    suite: "clubs",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_c3.png,
  },
  {
    value: 4,
    suite: "clubs",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_c4.png,
  },
  {
    value: 5,
    suite: "clubs",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_c5.png,
  },
  {
    value: 6,
    suite: "clubs",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_c6.png,
  },
  {
    value: 7,
    suite: "clubs",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_c7.png,
  },
  {
    value: 8,
    suite: "clubs",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_c8.png,
  },
  {
    value: 9,
    suite: "clubs",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_c9.png,
  },
  {
    value: 10,
    suite: "clubs",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_ck.png,
  },
  {
    value: 10,
    suite: "clubs",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_cq.png,
  },
  {
    value: 10,
    suite: "clubs",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_cj.png,
  },
  {
    value: 1,
    suite: "diamonds",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_da.png,
  },
  {
    value: 2,
    suite: "diamonds",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_d2.png,
  },
  {
    value: 3,
    suite: "diamonds",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_d3.png,
  },
  {
    value: 4,
    suite: "diamonds",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_d4.png,
  },
  {
    value: 5,
    suite: "diamonds",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_d5.png,
  },
  {
    value: 6,
    suite: "diamonds",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_d6.png,
  },
  {
    value: 7,
    suite: "diamonds",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_d7.png,
  },
  {
    value: 8,
    suite: "diamonds",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_d8.png,
  },
  {
    value: 9,
    suite: "diamonds",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_d9.png,
  },
  {
    value: 10,
    suite: "diamonds",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_d10.png,
  },
  {
    value: 10,
    suite: "diamonds",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_dj.png,
  },
  {
    value: 10,
    suite: "diamonds",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_dk.png,
  },
  {
    value: 10,
    suite: "diamonds",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_dq.png,
  },
  {
    value: 1,
    suite: "hearts",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_ha.png,
  },
  {
    value: 2,
    suite: "hearts",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_h2.png,
  },
  {
    value: 3,
    suite: "hearts",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_h3.png,
  },
  {
    value: 4,
    suite: "hearts",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_h4.png,
  },
  {
    value: 5,
    suite: "hearts",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_h5.png,
  },
  {
    value: 6,
    suite: "hearts",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_h6.png,
  },
  {
    value: 7,
    suite: "hearts",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_h7.png,
  },
  {
    value: 8,
    suite: "hearts",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_h8.png,
  },
  {
    value: 9,
    suite: "hearts",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_h9.png,
  },
  {
    value: 10,
    suite: "hearts",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_h10.png,
  },
  {
    value: 10,
    suite: "hearts",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_hj.png,
  },
  {
    value: 10,
    suite: "hearts",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_hk.png,

  },
  {
    value: 10,
    suite: "hearts",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_hq.png,
  },
  {
    value: 1,
    suite: "spades",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_sa.png,
  },
  {
    value: 2,
    suite: "spades",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_s2.png,
  },
  {
    value: 3,
    suite: "spades",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_s3.png,
  },
  {
    value: 4,
    suite: "spades",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_s4.png,
  },
  {
    value: 5,
    suite: "spades",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_s5.png,
  },
  {
    value: 6,
    suite: "spades",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_s6.png,
  },
  {
    value: 7,
    suite: "spades",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_s7.png,
  },
  {
    value: 8,
    suite: "spades",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_s8.png,
  },
  {
    value: 9,
    suite: "spades",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_s9.png,
  },
  {
    value: 10,
    suite: "spades",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_s10.png,
  },
  {
    value: 10,
    suite: "spades",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_sj.png,
  },
  {
    value: 10,
    suite: "spades",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_sk.png,
  },
  {
    value: 10,
    suite: "spades",
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_sq.png,
  },
];

/*var blackJack = {
  gameRunning: function(){
    console.log('blackJack.gameRunning() is running');

    if (blackJack.isRunning) {
      console.log('blackjack is running');
      //start with two cards dealt
      //create function for hit
        //deal two to dealer + remove those from the array
        //deal two to player + remove those from the array
      //create function for stand
      //create reset function
      blackJack.dealCards();
      AppController.handleCards();
    }
  dealCards: function(){},
  hit: function(){},
  stand: function(){},
  },
*/



/*GIVEN: the game has loaded and Im ready to play
WHEN: I click the button labeled 'deal'
THEN: the cards are dealed and I can begin the game */

//need function to deal cards
/*
getCards: function() {
  console.log("dealCards is running");
  return [
  //that function should choose two cards at random from the array,
  cardArray[Math.floor(Math.random() * cardArray.length)],
  cardArray[Math.floor(Math.random() * cardArray.length)],
  ];

  //and push cards into the player and dealer's hands
}
dealCards: function() {
  var tmp = cardArray.slice(cardArray);
  var ret = [];

  for (var i = 0; i < cardArray.length; i++) {
    var index = Math.floor(Math.random() * tmp.length);
    var removed = tmp.splice(index, 2);

    ret.push(removed[0]);
  }
  return ret;
}
console.log(ret);


//tie that function to run on reset btton
},
$(function(){
  // Attach AppController methods to the DOM as event handlers here.
  $('#reset').on('click', function (event) {
    event.dealCards();

    console.log('click event is working');

    AppController.handleClickStart();

  }) */
