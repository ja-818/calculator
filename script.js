const screen = document.querySelector(".screen");
screen.textContent = 0;
let firstValue;
let enterNewNumber = false;
let active = false;
let noBackspace = false;

//Initialized operations on false and function that turn al to false
let addi = false;
let subs = false;
let mult = false;
let divi = false;
let allToFalse = () => {addi=false; subs=false; mult=false; divi=false;}

//Display numbers on the screen
document.querySelectorAll(".number").forEach(e => e.onclick = displayNumber);
function displayNumber(){
  if (screen.textContent == 0) { screen.textContent = "";} //prevents adding the "0" of the screen to the number
  if (this.id == "result"){ return };
  if (this.id == "dot"){ return };    
  if (enterNewNumber){
    screen.textContent = "";
    enterNewNumber = false;
    noBackspace = false;
  }
  screen.textContent += this.id;
}

//Adds a dot on the screen, only if there isn't one already
document.getElementById("dot").onclick = () => {
  if (screen.textContent.includes(".") == true){ return }  
    else { screen.textContent += ".";} 
}

//Allows user to use backspace
document.getElementById("back").onclick = () => {
  if(enterNewNumber == false){
    if(noBackspace == false){
      screen.textContent = screen.textContent.slice(0, -1);
    }
    if(screen.textContent == ""){screen.textContent = "0"};
  }
}

//Multiply the value on the screen per -1
document.getElementById("negative").onclick = () => screen.textContent *= -1;

//Turn the value of the screen to 0
document.getElementById("ac").onclick = () => {
  screen.textContent = 0;
  allToFalse();
  active = false;
}

//Turns true a operation depending on the input
//Runs calculate function
document.getElementById("result").onclick = () => result();

//When user press "+", sets all operators to false and addition to true
//If enterNewNumber is true (that means another operator was inmediately previous pressed), doesn't runs calculate;
document.getElementById("addition").onclick = () => {
  allToFalse(); 
  addi = true;
  if(enterNewNumber == false){
    calculate();
  } 
}

//Functions with the same estructure than the previous, but for "-", "x", and "/"
document.getElementById("substraction").onclick = () => {allToFalse(); subs = true; if(enterNewNumber == false){calculate()}};
document.getElementById("multiplication").onclick = () => {allToFalse(); mult = true; if(enterNewNumber == false){calculate()}};
document.getElementById("division").onclick = () => {allToFalse(); divi = true; if(enterNewNumber == false){calculate()}};

let addition = () => screen.textContent = +firstValue + +screen.textContent;
let substraction = () => screen.textContent = +firstValue - +screen.textContent;
let multiplication = () => screen.textContent = +firstValue * +screen.textContent;
let division = () => screen.textContent = +firstValue / +screen.textContent;



function calculate(){
  enterNewNumber = true;
  if (active == false){
    active = true;
    firstValue = screen.textContent;
  } 
  else{
    if (addi == true){
      addition();
      firstValue = screen.textContent;
    }
    if(subs == true){
      substraction();
      firstValue = screen.textContent;
    }
    if(mult == true){
      multiplication();
      firstValue = screen.textContent;
    }
    if(divi == true){
      division();
      firstValue = screen.textContent;
    }
  }
}

function result(){
  active = false;
  if (addi){addition()};
  if (subs){substraction()};
  if (mult){multiplication()};
  if (divi){division()};
  allToFalse();
  noBackspace = true;
}


//document.getElementById("result").onclick = result;



// function addition(){
//   reset = true;
//   if (operating == true){
//     screen.textContent = +firstInput + +screen.textContent;
//     firstInput = screen.textContent;
//     turnFalse();
//     sum = true;
//   } else{
//     firstInput = screen.textContent;
//     sum = true;
//     operating = true;
//   }
// }

// function substraction(){
//   reset = true;
//   if (operating == true){
//     screen.textContent = +firstInput - +screen.textContent;
//     firstInput = screen.textContent;
//     turnFalse();
//     sub = true;
//   } else{
//     firstInput = screen.textContent;
//     sub = true;
//     operating = true;
//   }
// }

// function multiplication(){
//   reset = true;
//   if (operating == true){
//     screen.textContent = +firstInput * +screen.textContent;
//     firstInput = screen.textContent;
//     turnFalse();
//     mul = true;
//   } else{
//     firstInput = screen.textContent;
//     mul = true;
//     operating = true;
//   }
// }

// function division(){
//   reset = true;
//   if (operating == true){
//     screen.textContent = +firstInput / +screen.textContent;
//     firstInput = screen.textContent;
//     turnFalse();
//     div = true;
//   } else{
//     firstInput = screen.textContent;
//     div = true;
//     operating = true;
//   }
// }

// function result(){
//   reset = true;
//   if (sum == true){
//     addition();
//   }
//   if (sub == true){
//     substraction();
//   }
//   if (mul == true){
//     multiplication();
//   }
//   if (div == true){
//     division();
//   }
//   turnFalse();
//   operating = false;
// }


// function turnFalse(){
//   sum = false;
//   sub = false;
//   mul = false;
//   div = false;
// }