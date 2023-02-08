let com = null;
let player = null;
let scoreNum = 0;
let scoreDom = document.getElementById("score");
let winDom = document.getElementById("win");
let mesDom = document.getElementById("mes");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let clear = document.getElementById("clear");

// random number generator from 0 to n-1
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// get computer's choice
function getRandomChoice() {
  com = getRandomInt(3);
  if (com == 0) {
    com = "rock";
  } else if (com == 1) {
    com = "paper";
  } else {
    com = "scissors";
  }
}

// determine who win
function whoWin() {
  if (
    (com == "paper" && player == "rock") ||
    (com == "rock" && player == "scissors") ||
    (com == "scissors" && player == "paper")
  ) {
    // computer wins
    scoreNum--;
    scoreDom.innerHTML = `current score : ${scoreNum}`;
    mesDom.innerHTML = `player choose ${player} \nVs computer choose ${com}\n`;

    winDom.innerHTML = `Computer wins!`;
  } else if (com == player) {
    // draw
    mesDom.innerHTML = `player choose ${player} \nVs computer choose ${com}`;

    winDom.innerHTML = "Draw";
  } else {
    // player wins
    scoreNum++;
    scoreDom.innerHTML = `current score : ${scoreNum}`;
    mesDom.innerHTML = `player choose ${player} \nVs computer choose ${com}`;
    winDom.innerHTML = `Player wins!`;
  }
}
// game start
document.addEventListener("click", (e) => {
  if (e.target.id == "rock") {
    player = "rock";
  } else if (e.target.id == "paper") {
    player = "paper";
  } else if (e.target.id == "scissors") {
    player = "scissors";
  } else if (e.target.id == "clear") {
    scoreNum = 0;
    scoreDom.innerHTML = scoreNum;
    winDom.innerHTML = " ";
    mesDom.innerHTML = " ";
    player = null;
    com = null;
  }
  getRandomChoice();
  if (player != null && com != null) {
    whoWin();
  }
});
