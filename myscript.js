let displayValue = 0;
let hiddenValue = 0;
let operatorChoice = '';


// Using delegation to target specific elements
document.querySelector(".container").addEventListener("click", ( {target} ) => { 
  if (target.matches === null) {
 return; 
 } else if (target.matches(".numButtons")) {
  displayValue = (target.value);
  display.textContent = `${displayValue}`;
 } else { //target.matches(".opButtons") 
  operatorChoice = (target.value);
  console.log(`You chose ${operatorChoice}`);
  
  }
});

//Display value, alongside div
const container = document.querySelector(".container")
const display = document.createElement('div');
display.textContent = `${displayValue}`;
display.style.cssText=`
width: 325px;
height: 80px;
text-align: end;
font-size: 65px;
backgroundColor:"rgba(252, 252, 252, 0.192);`
container.prepend(display);



/* let children = Array.from(document.getElementsByClassName("buttons"));

children.forEach((e) => {   // loop through children and obtain value from buttons
  e.addEventListener("click", () => console.log(e.value));
});
 */

function operate (operator, hiddenValue, nextNum) {
 if (operator === '=') {
    return hiddenValue;
} else if (operator === '+') {
    return hiddenValue + nextNum;

} else if (operator === '-') {
    return hiddenValue - nextNum;

} else if (operator === '*') {
    return hiddenValue + nextNum;

} else if (operator === '/') {
    return hiddenValue + nextNum;
 }
 
};