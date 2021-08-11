
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");


// let player = {
//     Name : "Shyam",
//     Chips : 145
// };


// let playerEl = document.getElementById("player-el");
// playerEl.textContent = player.Name + ": $" + player.Chips;

function getRandomCard()
{
    let cardNumber = Math.floor(Math.random() * 13 + 1);
    if(cardNumber === 1)
    {
        return 11;
    }else if(cardNumber > 10 && cardNumber <14){
        return 10;
    }else{
        return cardNumber;
    }
}


function startGame()
{
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard , secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame()
{
    cardsEl.textContent = "cards: ";

    for(let i=0;i<cards.length;i++)
    {
        cardsEl.textContent +=  cards[i] + " " ;
    }
    sumEl.textContent = "Sum: " + sum ;
    if(sum <= 20){
        messageEl.textContent = "Do you want to draw a new card?";
    }else if(sum == 21){
        messageEl.textContent = "You've got BlackJack!";
        hasBlackJack = true;
    }else{
        messageEl.textContent = "You're out of the game!";
        isAlive = false;
    }

}


function newCard()
{
    if(isAlive === true && hasBlackJack === false)
    {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
   
}
