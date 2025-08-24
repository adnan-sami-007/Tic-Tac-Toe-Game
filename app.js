const boxes = document.querySelectorAll(".box");

const newBtn = document.querySelector('#newBtn');

const winningPatten = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

let userO = 0;
let userX = 0;

let turnO = true;

for (let box of boxes) {
  box.addEventListener("click", () => {
    if(turnO) {
      box.innerText = 'O';
      turnO = false;
    } else {
      box.innerText = 'X';
      turnO = true;
    }
    box.disabled = true;
    console.log("clicked");
    checkWinner();
  })
}


const gameWinner = (winner) => {
  console.log("winner", winner);
  if(winner === 'O') {
    userO++;
    document.querySelector('#userO').innerText = userO;
    console.log(userO);
  } else {
    userX++;
    document.querySelector('#userX').innerText = userX;
    console.log(userX);
  }
}

const disableBox = () => {
  for (let box of boxes) {
    console.log(box);
    box.disabled = true;
  }
}

const checkWinner = () => {
  for(let patten of winningPatten) {
    let pos1Val = boxes[patten[0]].innerText;
    let pos2Val = boxes[patten[1]].innerText;
    let pos3Val = boxes[patten[2]].innerText;

    if(pos1Val !== '' && pos2Val !== '' && pos3Val !== '') {
      if(pos1Val === pos2Val && pos2Val === pos3Val) {
        // console.log("winner", pos1Val);
        disableBox();
        gameWinner(pos1Val);
      }
    }
  }
}


newBtn.addEventListener("click", () => {
  for(let box of boxes) {
    box.innerText = '';
    box.disabled = false;
  }
})
