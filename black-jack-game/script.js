let cards = [];
let sum = 0;
let cardValue = document.getElementById("card-value");
let sumValue = document.getElementById("sum-value");
let hasBlackJack = false;
let isAlive = false;
let question = document.getElementById("interactive-question");
let player = document.getElementById("player");
let playerDetails = {
    name: "Vicky",
    chips: 150
};

player.innerHTML = playerDetails["name"] + ": $" + playerDetails.chips;

function startGame() {
    isAlive = true;
    document.getElementById("sum-value").style.display = "block";
    document.getElementById("card-value").style.display = "block";
    document.getElementById("player").style.display = "block";

    card1 = randomCardValue;
    card2 = randomCardValue;
    cards = [card1, card2];
    sum = card1 + card2;
    
    renderValue();
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if(randomNumber === 1) {
        return 11;
    } else if (randomNumber > 10) {
        return 10;
    } else {
        return randomNumber;
    }
}
let randomCardValue = getRandomCard();

function renderValue() {
    cardValue.innerHTML = "Card:";
    for (let index = 0; index < cards.length; index++) {
        let element = cards[index];
        cardValue.innerHTML += " " + element;
    }

    sumValue.innerHTML = "Sum:" + " " + sum;
    if (sum < 21) {
        question.innerHTML = "Do you want to draw a new card?";
    } else if (sum ===21 ) {
        question.innerHTML = "You have a Black Jack!";
        hasBlackJack = true;
    } else {
        question.innerHTML = "Ops, you are out of the game";
        isAlive = false;
    }
}

function newCard() {
    if (isAlive && hasBlackJack === false) {
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderValue();
    } else {
        console.log("clear");
    }
   
}

let largeCountries = ["China", "India", "Parkistan", "USA", "Nigeria"];
for (let index = 0; index < largeCountries.length; index++) {
    const element = largeCountries[index];
    console.log(element);
    
}