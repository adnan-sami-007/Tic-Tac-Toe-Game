const boxes = document.querySelectorAll(".box");

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
  })
}
