var cardArray = [
  {
    value: 1;
    suite: "clubs";
    src: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_ca.png;
  },
  {
    value: 2;
    suite: "clubs";
    image: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_c2.png;
  },
  {
    value: 3;
    suite: "clubs";
    image: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_c3.png;
  },
  {
    value: 4;
    suite: "clubs";
    image: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_c4.png;
  },
  {
    value: 5;
    suite: "clubs";
    image: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_c5.png;
  },
  {
    value: 6;
    suite: "clubs";
    image: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_c6.png;
  },
  {
    value: 7;
    suite: "clubs";
    image: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_c7.png;
  },
  {
    value: 8;
    suite: "clubs";
    image: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_c8.png;
  },
  {
    value: 9;
    suite: "clubs";
    image: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_c9.png;
  },
  {
    value: 10;
    suite: "clubs";
    image: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_ck.png;
  },
  {
    value: 10;
    suite: "clubs";
    image: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_cq.png;
  }
  {
    value: 10;
    suite: "clubs";
    image: public/images/poker_cards_chips_2d/PNGs/cards/Set_B/small/card_b_cj.png;
  }
]



/*GIVEN: the game has loaded and Im ready to play
WHEN: I click the button labeled 'deal'
THEN: the cards are dealed and I can begin the game */

//need function to deal cards
getCards: function() {
  console.log("dealCards is running");
  return [
  //that function should loop through the array of cards,
  cardArray[Math.floor(Math.random() * cardArray.length)],
  cardArray[Math.floor(Math.random() * cardArray.length)],
  ];
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

    //deal two to dealer + remove those from the array
    //deal two to player + remove those from the array
//tie that function to run on load
},
