let displayValue = "0";
let firstValue;
let secondValue;
let hiddenValue;
let operatorChoice = "";
let previousOperatorChoice = "";
let trigger = false;
let resolved = false;

// Using delegation to target specific elements
document.querySelector(".container").addEventListener("click", ({ target }) => {
  passedValue = target.value;

  if (target.matches(".resetButton")) {
    reset();
  }
  if (target.matches(".numButtons")) {
    numButtons(passedValue);
  }
  if (target.matches(".opButtons")) {
    operate(passedValue);
  }
});

//Display value, alongside div

/* let children = Array.from(document.getElementsByClassName("buttons"));

children.forEach((e) => {   // loop through children and obtain value from buttons
  e.addEventListener("click", () => console.log(e.value));
});
 */


function operate(passedValue) {
  if (passedValue === "=" &&  firstValue == null){
    return;
  }
  cNum = parseInt(displayValue);
   if (secondValue == null && firstValue == null) {
    firstValue = cNum;
    operatorChoice = passedValue;
    return;
  } else if (secondValue == null && firstValue != null) {
    previousOperatorChoice = operatorChoice;
     secondValue = cNum;
     if (operatorChoice != null && secondValue != null && firstValue != null) {
        operatorChoice = passedValue;
        resolved = false;
     }

    if (previousOperatorChoice === "+") {
    hiddenValue = firstValue + secondValue;
  } else if (previousOperatorChoice === "-") {
    hiddenValue = firstValue - secondValue;
  } else if (previousOperatorChoice === "*") {
    hiddenValue = firstValue * secondValue;
  } else if (previousOperatorChoice === "/") {
    hiddenValue = firstValue / secondValue;
  }
    resolve(passedValue);
 }
};

function resolve(passedValue) {
  if (passedValue === "=") {
    resolved = true;
    firstValue = hiddenValue;
    displayValue = hiddenValue.toString();
    secondValue = null;
    trigger = false;
    return (display.textContent = `${displayValue}`);
  } else 
    firstValue = hiddenValue;
    displayValue = hiddenValue.toString();
    secondValue = null;
    trigger = false;
    return (display.textContent = `${displayValue}`);
}

function reset() {
    displayValue = "0";
    hiddenValue = null;
    operatorChoice = "";
    firstValue = null;
    secondValue = null;
    display.textContent = `${displayValue}`;
    trigger = false;
    resolved = false;
}

function numButtons(passedValue) {
  
  if (displayValue.length >= 9) {
    return;
  }
  if (displayValue.charAt(0) === ".") {
    displayValue = "0.";
  }
  if (passedValue === "." && displayValue.includes(".")) {
    return;
  }
  if (displayValue === "0" && passedValue === "0") {
    return;
  }
   if (resolved === true) {
    hiddenValue = null;
    operatorChoice = "";
    firstValue = null;
    secondValue = null;
    trigger = false;
    resolved = false;
    displayValue = passedValue;
    display.textContent = `${displayValue}`;
    return;
   }
  if (firstValue != null && trigger === false) {
      trigger = true;
      displayValue = passedValue;
      display.textContent = `${displayValue}`;
  } else if (displayValue === "0" && passedValue != "0") {
    displayValue = passedValue;
    display.textContent = `${displayValue}`;
    return;
  } else {
    displayValue += passedValue;
    display.textContent = `${displayValue}`;
  }
 
}


const container = document.querySelector(".container");
const display = document.createElement("div");
display.textContent = `${displayValue}`;
display.style.cssText = `
width: 325px;
height: 80px;
text-align: end;
font-size: 65px;
font-weight: bold;
color: rgba(222, 245, 215);
backgroundColor:rgba(252, 252, 252, 0.192);`;
container.prepend(display);
