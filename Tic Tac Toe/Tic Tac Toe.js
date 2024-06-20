let buttons = document.querySelectorAll(".button");
let resetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector(".newGame");
let p = document.querySelector(".outputMsg");
let turn0 = true;
let count = 0;
const winPatterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = buttons[pattern[0]].innerText;
    let pos2 = buttons[pattern[1]].innerText;
    let pos3 = buttons[pattern[2]].innerText;
    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        winner(pos2);
        newGameBtn.classList.remove("hide");
        resetBtn.classList.add("hide");
        return true;
      }
    }
  }
};

const winner = (player) => {
  p.innerText = `"${player}" is the Winner.`;
  disableBtns();
}

buttons.forEach((b) => {
  b.addEventListener("click",() => {
    if (turn0) {
      b.innerText = "O";
      turn0 = false;
    } else {
      b.innerText = "X";
      turn0 = true;
    }
    b.disabled = true;
    count++;
    let winnerCond = checkWinner();
    if (count === 9 && !winnerCond) {
      p.innerText = 'It\'s a "DRAW" Match';
    }
  });
});

const disableBtns = () => {
  for(let b of buttons) {
    b.disabled = true;
  }
}

const enableBtns = () => {
  for(let b of buttons) {
    b.disabled = false;
    b.innerText = "";
  }
}

const newGame = () => {
  turn0 = true;
  enableBtns();
  p.innerText = "";
  newGameBtn.classList.add("hide");
  resetBtn.classList.remove("hide");
}

const reset = () => {
  turn0 = true;
  enableBtns();
  count = 0;
  p.innerText = "";
  
}

resetBtn.addEventListener("click",reset);
newGameBtn.addEventListener("click",newGame);
