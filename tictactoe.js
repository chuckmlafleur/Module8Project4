let playerTurn = true;
let computerMoveTimeout = 0;

const gameStatus = {
   MORE_MOVES_LEFT: 1,
   HUMAN_WINS: 2,
   COMPUTER_WINS: 3,
   DRAW_GAME: 4
};

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   const newBtn = document.getElementById("newGameButton");
   newBtn.addEventListener("click", newGame);

   const buttons = getGameBoardButtons();
   for (let button of buttons) {
      button.addEventListener("click", function () { boardButtonClicked(button); });
   }

   newGame();
}


function getGameBoardButtons() {
   return document.querySelectorAll("#gameBoard > button");
}

function checkForWinner() {
   const buttons = getGameBoardButtons();

   const possibilities = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
   ];

   for (let indices of possibilities) {
      if (buttons[indices[0]].innerHTML !== "" &&
         buttons[indices[0]].innerHTML === buttons[indices[1]].innerHTML &&
         buttons[indices[1]].innerHTML === buttons[indices[2]].innerHTML) {

         if (buttons[indices[0]].innerHTML === "X") {
            return gameStatus.HUMAN_WINS;
         }
         else {
            return gameStatus.COMPUTER_WINS;
         }
      }
   }

   for (let button of buttons) {
      if (button.innerHTML !== "X" && button.innerHTML !== "O") {
         return gameStatus.MORE_MOVES_LEFT;
      }
   }

   return gameStatus.DRAW_GAME;
}

function newGame() {
   clearTimeout(computerMoveTimeout);
   computerMoveTimeout = 0;

   const buttons = getGameBoardButtons();
   for (let button of buttons) {
      button.innerHTML = ""; 
      button.classList.remove("x", "o"); 
      button.disabled = false; 
   }

   playerTurn = true;

   document.getElementById("turnInfo").textContent = "Your turn";
}

function boardButtonClicked(button) {
   if (playerTurn) {
      button.innerHTML = "X";
      button.classList.add("x");
      button.disabled = true;
      switchTurn();
   }
}

function switchTurn() {
   const status = checkForWinner();

   if (status === gameStatus.MORE_MOVES_LEFT) {
      if (playerTurn) {
         computerMoveTimeout = setTimeout(makeComputerMove, 1000); 
         document.getElementById("turnInfo").textContent = "Computer's turn";
      } else {
         document.getElementById("turnInfo").textContent = "Your turn";
      }
      playerTurn = !playerTurn;
   } else {
      if (status === gameStatus.HUMAN_WINS) {
         document.getElementById("turnInfo").textContent = "You win!";
      } else if (status === gameStatus.COMPUTER_WINS) {
         document.getElementById("turnInfo").textContent = "Computer wins!";
      } else if (status === gameStatus.DRAW_GAME) {
         document.getElementById("turnInfo").textContent = "Draw game";
      }
      playerTurn = false;
   }
}

function makeComputerMove() {
   const buttons = getGameBoardButtons();
   let availableButtons = [];
   for (let button of buttons) {
      if (button.innerHTML === "") {
         availableButtons.push(button);
      }
   }

   if (availableButtons.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableButtons.length);
      const button = availableButtons[randomIndex];

      button.innerHTML = "O";
      button.classList.add("o");
      button.disabled = true;
      switchTurn();
   }
}
