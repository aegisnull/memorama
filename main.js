// Variable initialization
let uncoveredCards = 0;
let card1 = null;
let card2 = null;
let firstResult = null;
let secondResult = null;
let movements = 0;
let score = 0;
let time = false;

// Track movements & score to parse to HTML
let showMovements = document.getElementById("movements");
let showScore = document.getElementById("score");

// Random number generator
let numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
numbers = numbers.sort(() => {
  return Math.random() - 0.5;
});
console.log(numbers);

// Main function
function uncover(id) {
  uncoveredCards++;
  console.log(uncoveredCards);

  if (uncoveredCards == 1) {
    //show first number
    card1 = document.getElementById(id);
    firstResult = numbers[id];
    card1.innerHTML = firstResult;

    // Disable first button
    card1.disabled = true;
  } else if (uncoveredCards == 2) {
    //show second number
    card2 = document.getElementById(id);
    secondResult = numbers[id];
    card2.innerHTML = secondResult;

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

      if (score == 8) {
        showScore.innerHTML = `Score: ${score} You won!`;
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
      }, 1500);
    }
  }
}
