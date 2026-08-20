let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".btn_reset");
let newgame_btn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turnO = true; //playerX, playerO

const win_patterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const reset_game = () => {
  turnO = true;
  Enableboxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    //If the box already has any value i.e X or O then it should be disabled so if we again click on it, it should not change the value. For this....
    box.disabled = true;
    cheeckWinner();
  });
});

const Enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const show_winner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
};

const cheeckWinner = () => {
  for (let pattern of win_patterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if ((pos1val != "") & (pos2val != "") & (pos3val != "")) {
      if (pos1val === pos2val && pos2val === pos3val) {
        show_winner(pos1val);
        disableboxes();
      }
    }
  }
};

newgame_btn.addEventListener("click", reset_game);
resetbtn.addEventListener("click", reset_game);
