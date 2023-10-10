var rights = 0;
var wrongs = 0;
var qs = 1; // Start with the first question

function quiz(guess) {
  console.log(guess);

  if (guess === "right") {
    rights = rights + 1;
  } else {
    wrongs = wrongs + 1;
  }
  console.log("rights=" + rights + " wrongs=" + wrongs);

  // Hide the current question
  document.getElementById("q" + qs).style.display = "none";

  // If there are more questions, show the next question
  qs = qs + 1;
  if (qs <= 15) {
    document.getElementById("q" + qs).style.display = "block";
  } else {
    // Hide the last question
    document.getElementById("q15").style.display = "none";
    
    // Show the final results
    showResults();
    document.getElementById("correctCount").textContent = rights;
    document.getElementById("wrongCount").textContent = wrongs;
  }
}

// Define the showResults function outside of any other function or block
function showResults() {
  if (rights < 3) {
    document.getElementById("results").innerHTML =
      "You got " + rights + " answers right! <p>Hmmm maybe try again...";
  } else if (rights < 14) {
    document.getElementById("results").innerHTML =
      "You got " + rights + " answers right! <p>You're learning!";
  } else {
    document.getElementById("results").innerHTML =
      "You got " + rights + " answers right! <p>Go you! You can start showing off now...";
  }
}