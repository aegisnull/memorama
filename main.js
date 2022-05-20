// Variable initialization
let uncoveredCards = 0;
let card1 = null;
let card2 = null;
let firstResult = null;
let secondResult = null;
let movements = 0;
let score = 0;
let time = false;
let timer = 30;
let initialTime = 30;
let timeRemainingId = false;

let winAudio = new Audio("./sounds/win.wav");
let loseAudio = new Audio("./sounds/lose.wav");
let clickAudio = new Audio("./sounds/click.wav");
let rightAudio = new Audio("./sounds/right.wav");
let wrongAudio = new Audio("./sounds/wrong.wav");

// Track movements & score to parse to HTML
let showMovements = document.getElementById("movements");
let showScore = document.getElementById("score");
let showTimer = document.getElementById("remainingTime");

// Random number generator
let numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
numbers = numbers.sort(() => {
  return Math.random() - 0.5;
});
console.log(numbers);

// Functions to start and stop the timer
function startTimer() {
  timeRemainingId = setInterval(() => {
    timer--;
    showTimer.innerHTML = `Time: ${timer} segundos`;
    if (timer == 0) {
      clearInterval(timeRemainingId);
      blockCards();
      loseAudio.play();
    }
  }, 1000);
}

function blockCards() {
  for (let i = 0; i <= 15; i++) {
    let blockedCard = document.getElementById(i);
    blockedCard.innerHTML = `<img src="./img/${numbers[i]}.png">`;
    blockedCard.disabled = true;
  }
}

// Main function
function uncover(id) {
  if (time == false) {
    startTimer();
    time = true;
  }

  uncoveredCards++;
  console.log(uncoveredCards);

  if (uncoveredCards == 1) {
    //show first number
    card1 = document.getElementById(id);
    firstResult = numbers[id];
    card1.innerHTML = `<img src="./img/${firstResult}.png">`;
    clickAudio.play();

    // Disable first button
    card1.disabled = true;
  } else if (uncoveredCards == 2) {
    //show second number
    card2 = document.getElementById(id);
    secondResult = numbers[id];
    card2.innerHTML = `<img src="./img/${secondResult}.png">`;

    // Disable second button
    card2.disabled = true;

    // Increase movements
    movements++;
    showMovements.innerHTML = `Movements: ${movements}`;

    // Compare results
    if (firstResult == secondResult) {
      // Reset uncovered cards counter
      uncoveredCards = 0;

      // Update score counter
      score++;
      showScore.innerHTML = `Score: ${score}`;
      rightAudio.play();

      else {
        wrongAudio.play();
      }

      if (score == 8) {
        clearInterval(timeRemainingId);
        showScore.innerHTML = `Score: ${score} You won!`;
        showTimer.innerHTML = `Great! You won in ${
          initialTime - timer
        } seconds`;
        showMovements.innerHTML = `Movements: ${movements} Nice!`;
      }
    } else {
      // Show temporary cards and hide them after 1.5 seconds
      setTimeout(() => {
        card1.innerHTML = " ";
        card2.innerHTML = " ";
        card1.disabled = false;
        card2.disabled = false;
        uncoveredCards = 0;
      }, 800);
    }
  }
}
