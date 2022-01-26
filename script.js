//Make the buttons appear on the screen
let currentInput;

document.querySelectorAll(".number").forEach(e => e.onclick = displayNumber);
document.getElementById("back").onclick = () => document.querySelector(".screen").textContent = document.querySelector(".screen").textContent.slice(0, -1);

function displayNumber(){
  if (this.id == "result"){ return };
  if (this.id == "dot"){
    document.querySelector(".screen").textContent += ".";
  } else{
    document.querySelector(".screen").textContent += this.id;
  }
}