// Hands for players, multiple hands used for splitting cards
function Hand() {
    var cards = [],
    // Set to true if totalScore > 21
    isBust = false,
    // Total of all cards at a point in time, aces are handled in calcTotalScore
    totalScore = 0;
}
    // Sets totalScore and isBust
    this.calcTotalScore = function () {
        var hasAce = false,
        tempCardValue;

        if (cards.length === 0) {
            console.log("ERROR: No cards in this Hand");
        } else {
            // Reset totalScore before every calculation
            totalScore = 0;

            for (var i = 0; i < cards.length; i++) {
                tempCardValue = cards[i].getCardValue();
                if (tempCardValue === 11) {
                  hasAce = true;
                totalScore += tempCardValue;
            }

            if ((totalScore > 21) && hasAce) {
                totalScore -= 10;
            }

            if (totalScore > 21) {
                isBust = true;
            }
        }
    }

    this.popLastCard = function () {
        var tempPoppedCard = cards.pop();
        this.calcTotalScore();

        return tempPoppedCard;
    };

    this.pushNewCard = function (card) {
        cards.push(card);
        this.calcTotalScore();
    };

    this.getScore = function () {
        return totalScore;
    };

    this.getCard = function (cardPos) {
        return cards[cardPos].getCardNumber() + " of " + cards[cardPos].getCardSuit();
    };

    this.getCardNumber = function (cardPos) {
        return cards[cardPos].getCardNumber();
    };

    this.getCardsLength = function () {
        return cards.length;
    };

    this.getIsBust = function () {
        return isBust;
    };
};


// Cards exist in Hands or Decks
function Card(inSuit, inNum) {
    this.getCardSuit = function () {
        var suitName = "";
        switch (inSuit) {
        case 1:
            suitName = "Hearts";
            break;
        case 2:
            suitName = "Clubs";
            break;
        case 3:
            suitName = "Diamonds";
            break;
        case 4:
            suitName = "Spades";
            break;
        default:
            suitName = "ERROR";
        }

        return suitName;
    };

    this.getCardNumber = function () {
        var numName = "";

        if (inNum === 1) {
            numName = "Ace";
        } else if (inNum > 10) {
            switch (inNum) {
            case 11:
                numName = "Jack";
                break;
            case 12:
                numName = "Queen";
                break;
            case 13:
                numName = "King";
                break;
            default:
                numName = "ERROR";
            }
        } else {
            numName = inNum;
        }

        return numName;
    };

    this.getCardValue = function () {
        var value = inNum > 9 ? 10 : inNum === 1 ? 11 : inNum;

        return value;
    };

}


// Decks used for shuffling and dealing cards to Hands
function Deck() {
    var deckOfCards = [];

    this.shuffle = function () {
        var tempCard,
        randomDeckIndex,
        tempCardSuit = 1,
        tempCardNumber = 1;

        deckOfCards.length = 0;

        // Populate deck with 52 cards in order
        for (var i = 0; i < 52; i++) {
            deckOfCards[i] = new Card(tempCardSuit, tempCardNumber);

            if (tempCardNumber < 13) {
                tempCardNumber++;
            } else {
                tempCardNumber = 1;
                tempCardSuit++;
            }
        }

        // Randomize the 52 cards
        for (var h = (deckOfCards.length - 1); h > 0; h--) {
            if (i === 0) {
                randomDeckIndex = Math.floor(Math.random() * deckOfCards.length);
            } else {
                randomDeckIndex = Math.floor(Math.random() * h);
            }
            tempCard = deckOfCards[randomDeckIndex];
            deckOfCards[randomDeckIndex] = deckOfCards[h];
            deckOfCards[i] = tempCard;
        }
    };

    // Returns last card in the Deck
    this.popLastCard = function () {
        return deckOfCards.pop();
    };
}


// Players have Hands
function Player() {
    var hands = [new Hand()];

    this.initializePlayer= function () {
        hands.length = 0;
        this.addNewHand();
    };

    this.addNewHand = function () {
        hands.push(new Hand());
    };

    this.getScore = function (handIndex) {
        return hands[handIndex].getScore();
    };

    this.getCard = function (handIndex, cardIndex) {
        return hands[handIndex].getCard(cardIndex);
    };

    this.pushNewCard = function (handIndex, card) {
        hands[handIndex].pushNewCard(card);
    };

    this.popLastCard = function (handIndex) {
        return hands[handIndex].popLastCard();
    };

    this.getCardNumber = function (handIndex, cardIndex) {
        return hands[handIndex].getCardNumber(cardIndex);
    };

    this.splitHand = function (handIndex) {
        this.addNewHand();
        hands[handIndex + 1].pushNewCard(hands[handIndex].popLastCard());
    };

    this.getHandsLength = function () {
        return hands.length;
    };

    this.getCardsLength = function (handIndex) {
        return hands[handIndex].getCardsLength();
    };

    this.getIsBust = function (handIndex) {
        return hands[handIndex].getIsBust();
    };

    this.getIsStand = function (handIndex) {
        return hands[handIndex].isStand;
    };

    this.setIsStand = function (handIndex) {
        hands[handIndex].isStand = true;
    };

    // Returns true if there are Hands left to play
    this.hasGoodHand = function () {
        var goodHand = false;

        for (var i = 0; i < hands.length; i++) {
            if (!this.getIsBust(i)) {
                goodHand = true;
            }
        }

        return goodHand;
    };
}


function main() {
    var playCurrentHand,
    playerSplits = false,
    deck1 = new Deck(),
    currentHandIndex = 0,
    play = true;

    //Create initial hands and deal first 2 cards
    var player1 = new Player(),
    dealer = new Player();

    while (play) {
        deck1.shuffle();
        player1.pushNewCard(currentHandIndex, deck1.popLastCard());
        dealer.pushNewCard(0, deck1.popLastCard());
        player1.pushNewCard(currentHandIndex, deck1.popLastCard());
        dealer.pushNewCard(0, deck1.popLastCard());

        //Print initial deal to player
        console.log("You were dealt a " + player1.getCard(currentHandIndex, 0) + " and a " + player1.getCard(currentHandIndex, 1));
        console.log("Dealer shows " + dealer.getCard(0, 0));

        //Play player's hand
        while (currentHandIndex < player1.getHandsLength()) {
            //Check for splits
            if (player1.getCardNumber(currentHandIndex, 0) === player1.getCardNumber(currentHandIndex, 1)) {
                if (confirm("You were dealt two " + player1.getCardNumber(currentHandIndex, 0) + "'s. Do you want to split them?")) {
                    player1.splitHand(currentHandIndex);

                    //Deal 1 card to each hand
                    player1.pushNewCard(currentHandIndex, deck1.popLastCard());
                    player1.pushNewCard(currentHandIndex + 1, deck1.popLastCard());
                }
            }

            playCurrentHand = true;
            while (playCurrentHand && !player1.getIsBust(currentHandIndex)) {
                if ((currentHandIndex > 0) || (player1.getHandsLength() > 1)) {
                    console.log("Your current hand is a " + player1.getScore(currentHandIndex));
                }

                // Player automatically stands on a 21
                if ((player1.getScore(currentHandIndex) < 21) && confirm("Would you like another card?")) {
                    player1.pushNewCard(currentHandIndex, deck1.popLastCard());
                    console.log("You draw a " + player1.getCard(currentHandIndex, (player1.getCardsLength(currentHandIndex) - 1))  + " your new score is " + player1.getScore(currentHandIndex));

                    if (player1.getIsBust(currentHandIndex)) {
                        console.log("You bust on this hand");
                    }

                } else {
                    console.log("You stand on hand " + (currentHandIndex + 1) + " with a " + player1.getScore(currentHandIndex));
                    playCurrentHand = false;
                }
            }

            currentHandIndex++;
        }

        if (!player1.hasGoodHand()) {
            play = confirm("Do you want to play again?");
        } else {
            // Play dealer's hand
            console.log("The dealer was dealt a " + dealer.getScore(0));
            while (dealer.getScore(0) < 17 && !dealer.getIsBust(0)) {
                dealer.pushNewCard(0, deck1.popLastCard());
                console.log("The dealer draws a " + dealer.getCard(0, (dealer.getCardsLength(0) - 1)) + ". New score is " + dealer.getScore(0));
            }

            // Show results of dealer's hand
            if (dealer.getIsBust(0)) {
                console.log("Dealer busts!");
            } else {
                console.log("Dealer stands with a " + dealer.getScore(0));
            }

            // Display results
            for (var i = 0; i < player1.getHandsLength(); i++) {
                if (!player1.getIsBust(i)) {
                    if (dealer.getScore(0) === player1.getScore(i)) {
                        console.log("You push on hand " + (i + 1));
                    } else if ((dealer.getScore(0) > player1.getScore(i)) && !dealer.getIsBust(0)) {
                        console.log("Dealer wins hand " + (i + 1));
                    } else {
                        console.log("You win hand " + (i + 1));
                    }
                }
            }

            play = confirm("Do you want to play again?");
        }

        if (play) {
            player1.initializePlayer();
            dealer.initializePlayer();
            currentHandIndex = 0;
        }
    }
}
main();
