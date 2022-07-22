

let player = {
 name: "Magda",
 chips: 145,
 sayHello: function (){
  console.log("hello")
 }
}
// for display of many elements
// state of the game before we start the game 
let cards = [];
let sum = 0;
//tracks the state if player has blackjack 
let hasBlackJack = false;
//tracks the state if the player is in game 
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
// let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": £" + player.chips;

function getRandomCard() {
 let randomNumber = Math.floor(Math.random() * 13) + 1;
 if (randomNumber === 1) {
  return 11;
 } else if (randomNumber > 10) {
  return 10;
 }
 return randomNumber;
}

function startGame() {
 isAlive = true;
 let firstCard = getRandomCard();
 let secondCard = getRandomCard();
 cards.push(firstCard, secondCard);
 sum = firstCard + secondCard;
 renderGame();
}


function renderGame() {
  // renderout all the cards that we have 
 cardsEl.textContent = "Cards: " 
 for (let i = 0; i < cards.length; i++){
 cardsEl.textContent += " " + cards[i] 
 
 }
 
 sumEl.textContent = "Sum: " + sum;
 
 if (sum < 21) {
 message ="Do you want to draw new card? "

} else if (sum === 21) {
 message= "Woohoo! You've got blackjack! "
 console.log()
 hasBlackJack = true
 
} else {
 message="You lost and out of the game! "
 isAlive = false;
 }
 messageEl.textContent = message;

}

function newCard(){
 if (isAlive && !hasBlackJack) {
  let card = getRandomCard();
 sum += card;
 cards.push(card);

 renderGame();
 }
 
}
