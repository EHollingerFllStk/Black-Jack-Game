//1. create2 variables, firstCard and secondCard
//set thier variables to a random number between 2-11
//2. Creat a variable, sum and set it to the sum of the 2 cards

let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = ""

//1. Create a variable called isAlive and assign it to true
//2. Flip its valus to false in the appropriate code block
//1. Declare a variable called message and assign its value to and empty string
//2. Reassign the message variable to the string we're loggin out
//2. Creat a startGame() function. Move the conditional below into the function.
// 1. Store the message-el paragraph in a var called messageEl
//2.Store the sum paragraph in a var called sumEl
//2.Store the card paragraph in a var called cardEl


let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")

let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
//console.log(cardEl)

function startGame() {
    renderGame()
}

function renderGame() {
    //3. Render the sum out on the page in this format  --> "Sum: 14"
    //3. Render the cards out on the page in this format  --> "Cards: "
    //render out All the cards we have
    //2. render to the cards array when rendering out the cards
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
    message = "Would you like to draw another card?"
    } else if (sum === 21) {
        message = "You;ve got Black Jack!"
        hasBlackJack = true;
    } else {
        message = "You went over."
        isAlive = false;
    }
    //2. Display the message in the messageEl using message.El.tectContent
    messageEl.textContent = message;
    //console.log(message)
}
//2. Create a newCard function that logs out "Drawing a new card from the deck"

function newCard() {
    console.log("Drawing a new card from the deck")
    //1. Create a card var and hard code its value to a number 2-11
    let card = 2;

    console.log(card)
    //2. add the new card to the sum var
    sum += card
    //push card to cards array
    cards.push(card)
    console.log(cards)
    //3. call the startGame()
    renderGame()
}
//Cash OUT!!
// console.log(isAlive)
// console.log(message)



