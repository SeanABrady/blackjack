let hand = []
let sum = 0 
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl =  document.getElementById("player-el")

let player = {
    name: "Sean",
    chips: 200
}

playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    hand = [firstCard, secondCard]
    sum = firstCard + secondCard 
    isAlive = true
    renderGame()
}

function getRandomCard() {
    let i = Math.floor(Math.random() * 13) + 1
    //Checks the rank of the card, if 1 then it's an Ace so is worth 11, if 11, 12 or 13 then it's Ace, King or Queen worth 10
    if (i === 1) {
        return 11
    } else if (i >=11) {
        return 10
    } else {
        return i
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for ( let i = 0; i < hand.length; i++) {
        cardsEl.textContent += " " + hand[i] 
    }
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    }  else if (sum === 21) {
        message = "Blackjack!"
        hasBlackjack = true
    } else {
        message = "You went bust..."
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (hasBlackjack === false && isAlive === true) {
        let nextCard = getRandomCard()
        sum += nextCard
        hand.push(nextCard)
        renderGame()
    }
}
