// Variable Declarations
let yourScore = document.getElementById("your-score");
let compScore = document.getElementById("comp-score");
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
let yourImage = document.getElementById("your-image");
let compImage = document.getElementById("comp-image");
let yourScoreValue = 0;
let compScoreValue = 0;
let resultModal = document.getElementById("result-modal");
let resultMessage = document.getElementById("result-message");
let gameButtons = document.querySelectorAll(".options button");
let playButton = document.getElementById("play-button");

// Array of images
imageArray = [
  "./assets/paper-hand.png",
  "./assets/rock-hand.png",
  "./assets/scissors-hand.png",
];

// Main function
function mainfunc(yourChoice) {
  yourImage.src = imageArray[yourChoice];
  let compChoice = Math.floor(Math.random() * 3);
  compImage.src = imageArray[compChoice];

  // Check who won in each round
  switch (compChoice) {
    case 0:
      if (yourChoice === 0) {
      } else if (yourChoice === 1) {
        compScoreValue++;
      } else {
        yourScoreValue++;
      }
      break;

    case 1:
      if (yourChoice === 0) {
        yourScoreValue++;
      } else if (yourChoice === 1) {
      } else {
        compScoreValue++;
      }
      break;

    case 2:
      if (yourChoice === 0) {
        compScoreValue++;
      } else if (yourChoice === 1) {
        yourScoreValue++;
      } else {
      }
      break;
  }

  // Checks if the game has ended
  if (yourScoreValue >= 5 || compScoreValue >= 5) {
    endGame();
  }
  updateScores();
}

// Event Listeners
rockButton.addEventListener("click", function () {
  mainfunc(1);
});

paperButton.addEventListener("click", function () {
  mainfunc(0);
});

scissorsButton.addEventListener("click", function () {
  mainfunc(2);
});

// Update scores
function updateScores() {
  yourScore.textContent = yourScoreValue;
  compScore.textContent = compScoreValue;
}

// End Game
function endGame() {
  resultModal.style.display = "block";

  resultMessage.textContent =
    yourScoreValue > compScoreValue
      ? "You Won the Game"
      : "Computer Won the Game";

  disableGameButtons();

  gameButtons.forEach((button) => {
    button.style.display = "none";
  });
}

// Disable game buttons
function disableGameButtons() {
  gameButtons.forEach((button) => {
    button.disabled = true;
  });
}

// Modal Play Again Button
playButton.addEventListener("click", function () {
  window.location.href = "./game.html";
});

// Reset Game
function resetGame() {
  resultModal.style.display = "none";

  // Reset scores and enable game buttons
  yourScoreValue = 0;
  compScoreValue = 0;
  updateScores();
}
