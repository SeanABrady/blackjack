let firstCard = Math.floor(Math.random() * 11) + 1
let secondCard = Math.floor(Math.random() * 11) + 1
let hand = [firstCard, secondCard]
let nextCard = 0
let sum = firstCard + secondCard 
let hasBlackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

messageEl.textContent

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " + hand
    sumEl.textContent += " " + sum
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
    nextCard = Math.floor(Math.random() * 11) + 1
    sum += nextCard
    hand.push(nextCard)
    renderGame()
}
