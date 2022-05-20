// Variable initialization
let uncoveredCards = 0;
let card1 = null;
let card2 = null;

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
    card1.innerHTML = numbers[id];
  }
}
