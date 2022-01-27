//Make the numers appear on the screen
//Remove numbers with the backspace
let firstInput = 0;
let secondInput;
const screen = document.querySelector(".screen");
let firstTime = false;
let operating = false;
let sum = false;
let sub = false;
let mul = false;
let div = false;
let reset = false;

document.querySelectorAll(".number").forEach(e => e.onclick = displayNumber);
document.getElementById("back").onclick = () => screen.textContent = document.querySelector(".screen").textContent.slice(0, -1);

function displayNumber(){
  if(reset == true){
    screen.textContent = "";
    reset = false;
  }
  if (this.id == "result"){ return };
  if (screen.textContent == "0"){
    screen.textContent = "";
  }

  if (this.id == "dot"){
    screen.textContent += ".";
  } else{
    screen.textContent += this.id;
  }
}

//Operators
document.getElementById("addition").onclick = addition;
document.getElementById("substraction").onclick = substraction;
document.getElementById("multiplication").onclick = multiplication;
document.getElementById("division").onclick = division;
document.getElementById("result").onclick = result;

function addition(){
  reset = true;
  if (operating == true){
    screen.textContent = +firstInput + +screen.textContent;
    firstInput = screen.textContent;
    turnFalse();
    sum = true;
  } else{
    firstInput = screen.textContent;
    sum = true;
    operating = true;
  }
}

function substraction(){
  reset = true;
  if (operating == true){
    screen.textContent = +firstInput - +screen.textContent;
    firstInput = screen.textContent;
    turnFalse();
    sub = true;
  } else{
    firstInput = screen.textContent;
    sub = true;
    operating = true;
  }
}

function multiplication(){
  reset = true;
  if (operating == true){
    screen.textContent = +firstInput * +screen.textContent;
    firstInput = screen.textContent;
    turnFalse();
    mul = true;
  } else{
    firstInput = screen.textContent;
    mul = true;
    operating = true;
  }
}

function division(){
  reset = true;
  if (operating == true){
    screen.textContent = +firstInput / +screen.textContent;
    firstInput = screen.textContent;
    turnFalse();
    div = true;
  } else{
    firstInput = screen.textContent;
    div = true;
    operating = true;
  }
}

function result(){
  reset = true;
  if (sum == true){
    addition();
  }
  if (sub == true){
    substraction();
  }
  if (mul == true){
    multiplication();
  }
  if (div == true){
    division();
  }
  turnFalse();
  operating = false;
}


function turnFalse(){
  sum = false;
  sub = false;
  mul = false;
  div = false;
}

document.getElementById("negative").onclick = () => {
  screen.textContent *= -1;
  firstInput = screen.textContent;
}

document.getElementById("ac").onclick = () => {
  screen.textContent = 0;
  firstInput = 0;
  reset = false;
  turnFalse();
  operating = false;
}