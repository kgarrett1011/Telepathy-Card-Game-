// app.js

// Initialize the game variables
let currentCard = generateCard();  // Generate the first card
let score = 0;  // Initialize score to 0
let gameOver = false
// Get DOM elements
const currentCardElement = document.getElementById('current-card');
const higherButton = document.getElementById('higher-btn');
const lowerButton = document.getElementById('lower-btn');
const resultMessage = document.getElementById('result-message');
const scoreElement = document.getElementById('score');
const playAgainButton = document.getElementById('play-again-btn');

// Function to generate a random card (1 to 13, where 11 is Jack, 12 is Queen, and 13 is King)
function generateCard() {
    return Math.floor(Math.random() * 13) + 1;
}

// Function to update the current card display on the screen
function updateCardDisplay() {
    currentCardElement.textContent = currentCard;
}

// Function to check the guess and update the game state
function makeGuess(guess) {
    if (gameOver) return
    
    // Generate the next card
    const nextCard = generateCard();
    const isCorrect = (guess === 'higher' && nextCard > currentCard) || (guess === 'lower' && nextCard < currentCard);

    // Check if the guess was correct
    if (isCorrect) {
        score+= currentCard  // Increment score
        resultMessage.textContent = `Correct, Pick Another Card! The next card was ${nextCard}.`;
    } else {
        
        resultMessage.textContent = `Incorrect, GAME OVER! The next card was ${nextCard}.`;
        scoreElement.textContent = `The Final Score is ${score}`; 
        playAgainButton.style.display = 'inline-block';
        gameOver = true
    }


    // Update the current card to the next card
    currentCard = nextCard;
    
    // Update score and card display
    // scoreElement.textContent = `Score: ${score}`; 
    updateCardDisplay();
}

// Event listeners for the 'higher' and 'lower' buttons
higherButton.addEventListener('click', function() {
    makeGuess('higher');
});

lowerButton.addEventListener('click', function() {
    makeGuess('lower');
});
// Event listener for the 'Play Again' button
playAgainButton.addEventListener('click', function() {
    // Reset the game state
    score = 0;
    gameOver = false
    currentCard = generateCard();  // Get a new first card
    resultMessage.textContent = '';  // Clear any previous result messages
    scoreElement.textContent = `Score: ${score}`;
    updateCardDisplay() ;

    // Hide the Play Again button and show the guess buttons
    playAgainButton.style.display = 'none';
    higherButton.style.display = 'inline-block';
    lowerButton.style.display = 'inline-block';
});
// Start the game by displaying the first card
updateCardDisplay();


