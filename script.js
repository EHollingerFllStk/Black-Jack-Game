//1. create2 variables, firstCard and secondCard
//set thier variables to a random number between 2-11
//2. Creat a variable, sum and set it to the sum of the 2 cards

let firstCard = 6;
let secondCard = 12;
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
    //3. Render the sum out on the page in this format  --> "Sum: 14"
    //3. Render the cards out on the page in this format  --> "Cards: "
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
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

//Cash OUT!!
// console.log(isAlive)
// console.log(message)


